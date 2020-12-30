import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RegisterService } from '../register.service';
import { School } from './School';

@Component({
  selector: 'app-school-registration',
  templateUrl: './school-registration.component.html',
  styleUrls: ['./school-registration.component.scss']
})
export class SchoolRegistrationComponent implements OnInit {

  newSchool = new School();
  picExist = 2;//0=>fales 1=>true 2=>notTotteshed yet
  userId: string | undefined = '';

  constructor(private register : RegisterService , private route:ActivatedRoute , private router:Router) { }

  onFileSelected(event:any){
    if(event.target.files.length>0){
      this.newSchool.schoolLogo = event.target.files[0];
      this.picExist= 1;
    }
  }
  createNewSchool(){
    let formData = new FormData();
    formData.append('schoolName',this.newSchool.schoolName);
    formData.append('schoolLogo',this.newSchool.schoolLogo);
    this.register.asignUserToSchool(formData,this.userId).subscribe(
      next=>{
        if(next.success){
          this.router.navigate(['/auth/sign_in']);
        }
      },
      error=>{

      }
    );
  }
  onSubmit(registerSchoolForm :NgForm){
    if(this.picExist == 1 ){
      if(registerSchoolForm.valid && this.userId != undefined && this.userId != ''){
        this.createNewSchool();
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
