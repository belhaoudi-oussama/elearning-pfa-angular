import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  loginUrl :string="http://localhost:3000/auth/login";
  constructor(private http : HttpClient) { }
  signInPost(data:any) : Observable<any> {
    return this.http.post<any>(this.loginUrl,data).pipe(
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
    return throwError(err.error.message);
 }
}
