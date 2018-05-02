import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(
      private http: HttpClient
    ) { }

  /*this.http.post('http://naxs/app_dev.php/naxsRequest', {id: id, pass: pass})*/ 
  
                
  login(id: string, pass : string){
    /*this.http.post('http://localhost/naxs/web/app_dev.php/login', {id: id, pass: pass})
        .map(res =>res.json())
        .subscribe(
            data => localStorage.setItem('id_token', data.id_token),
            error => console.log(error)
        );*/
  }  

}
