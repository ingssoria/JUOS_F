import { routes } from "./app.routes";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AuthenticationService } from './authentication.service';
import { ImageService } from "./servicios/image.service";
import { AuthServiceService } from "./servicios/auth-service/auth-service.service";
import { UsuarioService } from "./servicios/usuario.service";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule, Routes } from '@angular/router'; en caso de que configura las rutas aqui mismo

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoguinComponent } from './loguin/loguin.component';
import { ListclientsComponent } from './listclients/listclients.component';
import { GeometriaComponent } from './geometria/geometria.component';
import { NavbarComponent } from './navbar.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image-list/image.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { AdminimageComponent } from './adminimage/adminimage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminimageListComponent } from './adminimage/adminimage-list/adminimage-list.component';
import { AdminimageCreateComponent } from './adminimage/adminimage-create/adminimage-create.component';
import { AdminimageDeleteComponent } from './adminimage/adminimage-delete/adminimage-delete.component';
import { AdminimageEditComponent } from './adminimage/adminimage-edit/adminimage-edit.component';
import { LoginComponent } from './login/login.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminuserListComponent } from './adminuser/adminuser-list/adminuser-list.component';
import {AuthguardService} from "./servicios/authguard/authguard.service";

//import { CirculoComponent } from './geometria/geometria.component';


    @NgModule({
      declarations: [
        AppComponent,
        HomeComponent,
        LoguinComponent,
        ListclientsComponent,
        GeometriaComponent,// si fuera abstract no la puedo incluir aqui
        /*CirculoComponent*/// y deberia incluir los componentes hijos
        //NavBarComponent,
        NavbarComponent,
        ImageListComponent,
        ImageComponent,
        ImageDetailComponent,
        AdminimageComponent,
        DashboardComponent,
        AdminimageListComponent,
        AdminimageCreateComponent,
        AdminimageDeleteComponent,
        AdminimageEditComponent,
        LoginComponent,
        AdminuserComponent,
        AdminuserListComponent
],
imports: [
    BrowserModule,
    routes, //RouterModule.forRoot(appRoutes), en caso de que configuare las rutas aqui mismo
    FormsModule,
    HttpClientModule
],
providers: [
    //AuthenticationService,
    ImageService,
    AuthServiceService,
    AuthguardService,
    UsuarioService
],
bootstrap: [AppComponent]
})
export class AppModule { }
