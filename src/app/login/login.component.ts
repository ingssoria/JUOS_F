import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthServiceService } from "../servicios/auth-service/auth-service.service";
import { Usuario } from "../modelos/usuario.modelo";
import {Observable} from "rxjs/Observable";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario = new Usuario();
  textError: string = '';
  estadoCarga: boolean = false;

  constructor(private authServ: AuthServiceService, private router: Router) { }

  ngOnInit() {

      this.authServ.logout();
  }

  login(){

    this.estadoCarga = true;

    this.authServ.login(this.user)
        .subscribe(
            resultado => {
                if(resultado === true){
                    //console.log(resultado);
                    //console.log(sessionStorage.getItem('token'));
                    //localStorage.setItem('token', success['token'] );

                    this.router.navigateByUrl('/home');
                }
                else {
                    this.textError = "Credenciales Incorectas !";
                    this.estadoCarga = false;
                }
            },
            error => {
                //console.log(error);

                this.textError = "Credenciales Incorectas !";
                this.estadoCarga = false;
            }
        )/**/;

    /*this.authServ.login(this.user).then(success => {

      localStorage.setItem('token', success.token);
      //this.text += localStorage.getItem('token');
      this.router.navigateByUrl('/home');
    }).catch((err) => {console.log(err.message)
    });*/
  }
}
