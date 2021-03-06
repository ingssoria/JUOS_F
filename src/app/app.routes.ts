import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { GeometriaComponent } from './geometria/geometria.component';
import { ModuleWithProviders } from "@angular/core";
import { AdminimageComponent } from "./adminimage/adminimage.component";
import { adminimageRoutes } from "./adminimage/adminimage.routes";
import { AdminuserComponent } from "./adminuser/adminuser.component";
import { adminuserRoutes } from "./adminuser/adminUser.routes";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthguardService } from "./servicios/authguard/authguard.service";

const appRoutes: Routes = [
    //{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [ AuthguardService ] },
    { path: 'admin', component: DashboardComponent, canActivate: [ AuthguardService ] },
    { path: 'adminimage', component: AdminimageComponent, children: adminimageRoutes, canActivate: [ AuthguardService ] },
    { path: 'adminuser', component: AdminuserComponent, children: adminuserRoutes, canActivate: [ AuthguardService ] },
    { path: 'geometria', component: GeometriaComponent },
    { path: '**', redirectTo: 'home' }
    ];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
