import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http : HttpClient) {

  }
  setLocalStorage(resObj : any){
      const expire = moment().add(resObj.expiresIn);
      localStorage.setItem('token',resObj.token);
      localStorage.setItem('expires',JSON.stringify(expire.valueOf()));
      localStorage.setItem('email', resObj.email);
      localStorage.setItem('firstname',resObj.firstname);
      localStorage.setItem('lastname',resObj.lastname);
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }
  getExpiration(){
    const expires = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expires || 'null');
    return moment(expiresAt);
  }
  isSignIn(){
    return moment().isBefore(this.getExpiration());
  }
  isSignOut(){
    return !this.isSignIn();
  }
 /* private handelError(err : HttpErrorResponse){
    let errorMssg='';
    if (err.error instanceof ErrorEvent) {
        errorMssg = `ER => ${err.error.message}`;
    }else{
        errorMssg = ` Server Status : ${err.status},err mssg is ${err.message} `
    }
    console.error(errorMssg);
    return throwError(errorMssg);
}*/
}
