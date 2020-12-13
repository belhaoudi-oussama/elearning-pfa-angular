import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signInUrl = 'http://localhost:3000/api/admin/employee'
  constructor(private http : HttpClient) {

  }

  signIn(data:any) : Observable<any> {
    return this.http.post<any>(this.signInUrl,data).pipe(
        catchError(this.handelError)
    );
  }

  setLocalStorage(resObj : any){
      const expire = moment().add(resObj.expiresIn);
      localStorage.setItem('token',resObj.token);
      localStorage.setItem('expires',JSON.stringify(expire.valueOf()));
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }
  getExpiration(){
    const expires = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expires || '');
    return moment(expiresAt);
  }
  isSignIn(){
    return moment().isBefore(this.getExpiration());
  }
  isSignOut(){
    return !this.isSignIn();
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
