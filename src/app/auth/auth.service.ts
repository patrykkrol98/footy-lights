import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';

export interface authResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>()

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<authResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAelLPkm5ZZLU7gUMiAu-GUAURpCnUC6Vs",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
  }

  login(email: string, password: string) {
    return this.http.post<authResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAelLPkm5ZZLU7gUMiAu-GUAURpCnUC6Vs",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
  }

  private handleAuthentication(email: string, id: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, id, token, expirationDate)
    this.user.next(user);
  }
}
