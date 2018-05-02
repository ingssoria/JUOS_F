import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {
  
  usuario: any = {};
  //returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
        //console.log(this.returnUrl);
    }

  ngOnInit() {
  
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  /*login(){
    //this.ver = this.authenticationService.login(this.usuario.id, this.usuario.pass);
    //console.log(localStorage);

    //this.router.navigate(['/home']);//me redirecciona haca la ruta indicada
  }*/

}
