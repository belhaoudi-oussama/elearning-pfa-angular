import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  registerUrl : string = "http://localhost:3000/auth/register";
  schoolRegisterUrl : string = "http://localhost:3000/auth/register/school";
  studentRegisterUrl : string = "http://localhost:3000/auth/register/student";
  constructor(private http : HttpClient) {

  }


  createUser(data:any) : Observable<any> {
    return this.http.post<any>(this.registerUrl,data).pipe(
        catchError(this.handelError)
    );
  }
  asignUserToSchool(data:any,userId:string | undefined) : Observable<any> {
    return this.http.post<any>(`${this.schoolRegisterUrl}/${userId}`,data).pipe(
        catchError(this.handelError)
    );
  }
  asignUserToStudent(data:any,userId:string | undefined) : Observable<any> {
    return this.http.post<any>(`${this.studentRegisterUrl}/${userId}`,data).pipe(
        catchError(this.handelError)
    );
  }
  private handelError(err : HttpErrorResponse){
    let errorMssg='';
    if (err.error instanceof ErrorEvent) {
        errorMssg = `ER => ${err.error.message}`;
    }else{
        errorMssg = ` Server Status : ${err.status},err mssg is ${err.message} `
    }
    console.error(errorMssg);
    return throwError(errorMssg);
 }

}
