import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  registerUrl : string = "http://localhost:3000/auth/register";
  schoolRegisterUrl : string = "http://localhost:3000/auth/register/student?id=3";
  studentRegisterUrl : string = "http://localhost:3000/auth/register/student";
  constructor(private http : HttpClient) {

  }

  params = new HttpParams()
    .set('id', '3');
  createUser(data:any) : Observable<any> {
    return this.http.post<any>(this.registerUrl,data).pipe(
        catchError(this.handelError)
    );
  }
  asignUserToSchool(data:any) : Observable<any> {
    return this.http.post<any>(this.schoolRegisterUrl,data).pipe(
        catchError(this.handelError)
    );
  }
  asignUserToStudent(data:any) : Observable<any> {
    return this.http.post<any>(this.studentRegisterUrl,this.params,data).pipe(
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
