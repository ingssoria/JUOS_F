import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Usuario} from "../../modelos/usuario.modelo";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";
import * as Rx from "rxjs/Rx";

@Component({
  selector: 'app-adminuser-list',
  templateUrl: './adminuser-list.component.html',
  styleUrls: ['./adminuser-list.component.css']
})
export class AdminuserListComponent implements OnInit {

  usuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
      this.usuarioService.getUsuarios()
        .subscribe(
            result =>{
                this.usuarios = Rx.Observable.of(result);
            },
            error =>{
              sessionStorage.removeItem('token');
              this.router.navigateByUrl('/home');
            });
    //console.log(this.usuarios);
  }


}
