import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarioDTO } from '../model/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';

import {userCredentials, authenticationResponse} from './security.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient, private usuarioService : UsuarioService) { }
  private apiURL = environment.apiURL;
  private readonly tokenKey: string = 'token';
  public user: usuarioDTO;
  private readonly userid: string = 'userid';
  private readonly expirationTokenKey: string = 'token-expiration'
  private roleField = "role";

  isAuthenticated(): boolean{
    const token = localStorage.getItem(this.tokenKey);

    if (!token){
      return false;
    }

    /* console.log("123213"+this.user.email); */

    const expiration = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date(expiration);

    /* if (expirationDate <= new Date()){
      this.logout();
      return false;
    }
 */
    return true;
  }

  chargeUser(){
    console.log("teste");
    if(localStorage.getItem(this.userid)){
      this.usuarioService.getById(localStorage.getItem(this.userid)).subscribe
      (user => this.user = user
      );
    }
  }

  getFieldFromJWT(field: string): string {
    const token = localStorage.getItem(this.tokenKey);
    if (!token){return '';}
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userid);
    if(!localStorage.getItem(this.userid)){
      this.user = undefined;
      console.log(this.user);
    }

  }

  login(userCredentials: userCredentials): Observable<authenticationResponse>{
    return this.http.post<authenticationResponse>(this.apiURL + "Authentication/Login", userCredentials);
  }

  /* login(userCredentials: userCredentials){
    console.log(userCredentials);
    return this.http.post(this.apiURL + "Authentication/Login", userCredentials);
  } */

  saveToken(authenticationResponse: authenticationResponse){
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(this.userid,authenticationResponse.usuario.id);
    this.chargeUser();
    /* this.user = authenticationResponse.usuario; */
    /* localStorage.setItem(this.expirationTokenKey, authenticationResponse.expiration.toString()); */
  }

  getToken(){
    return localStorage.getItem(this.tokenKey);
  }

  getRole(): string {
    return this.getFieldFromJWT("role");
  }
}
