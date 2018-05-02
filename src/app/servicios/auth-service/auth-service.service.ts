import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Usuario } from "../../modelos/usuario.modelo";


@Injectable()
export class AuthServiceService {

  private apiURL = 'http://localhost/BACKEND/web/app_dev.php/api/';

  /*private headers:  HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
  });*/

  constructor(private http: HttpClient) { }

  private getUrl(modelo: string){
      return this.apiURL + modelo;
  }

  private getDatos(data){
      if(data && data['token']){
          sessionStorage.setItem('token', data['token']);
          return true;
      }
      return false;
  }

  private error(error: any){
      let msg = (error.message) ? error.message : 'Error desconocido';
      //console.log(msg);
      Observable.throw(msg);
  }

  login(user: Usuario): Observable<boolean>{
      let body = 'name=' + user.name + '&pass=' + user.pass;
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

      return this.http.post<boolean>(this.getUrl('tokens'), body, {headers : headers})
          .map((data) => this.getDatos(data));
          //.catch((error) => this.error());
  }

  logout(){
      //localStorage.clear();
      sessionStorage.removeItem('token');
  }


  /*login(user: Usuario): Observable<HttpResponse<Config>>{

    let url: string = this.getUrl("tokens");
    return this.http.post<HttpResponse<Config>>(url, user, {headers: this.headers});

  }

  login(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.getUrl("jwt"));
  }

  login(usuario: Usuario): Observable<boolean>{
    let body = 'Login=' + usuario.user_id + '&password=' + usuario.password;

    //let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    //let options = new RequestOptions({ 'headers': headers });
    //return this.http.post(this.getUrl("jwt"), body, options).map(this.getDatos);

    return this.http.post(this.getUrl("jwt"), body, { 'headers': { 'Content-Type' : 'application/x-www-form-urlencoded' } }).map(this.getDatos);
  }

  logout(): void{
    sessionStorage.removeItem('token');
  }*/

}
