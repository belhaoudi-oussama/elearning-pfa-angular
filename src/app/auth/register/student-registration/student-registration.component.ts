import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegisterService } from '../register.service';
import { Student } from './student';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  newStudent = new Student();
  picExist = 2;//0=>fales 1=>true 2=>notTotteshed yet
  userId: string | undefined = '';

  constructor(private register : RegisterService , private route:ActivatedRoute , private router:Router) { }

  onFileSelected(event:any){
    if(event.target.files.length>0){
      this.newStudent.profilePicture = event.target.files[0];
      this.picExist= 1;
    }
  }

  createNewStudent(){
    let formData = new FormData();
    formData.append('firstName',this.newStudent.firstName);
    formData.append('lastName',this.newStudent.lastName);
    formData.append('phoneNumber',this.newStudent.phoneNumber);
    formData.append('profilePicture',this.newStudent.profilePicture);
    this.register.asignUserToStudent(formData,this.userId).subscribe(
      next=>{
        if(next.success){
          this.router.navigate(['/auth/sign_in']);
        }
      },
      error=>{

      }
    );
  }

  onSubmit(registerStudentForm :NgForm){
    if(this.picExist == 1 ){
      if(registerStudentForm.valid && this.userId != undefined && this.userId != ''){
        this.createNewStudent();
      }
    }else{
      this.picExist = 0;
    }
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')?.toString() == undefined){
      this.router.navigate(['/auth/sign_in']);
    }else{
      this.userId = this.route.snapshot.paramMap.get('id')?.toString();
    }
  }
}
