import { Routes } from '@angular/router';
//import { DashboardComponent } from "../dashboard/dashboard.component";
import { AdminuserListComponent } from "./adminuser-list/adminuser-list.component";

export const adminuserRoutes: Routes = [
    //{ path: '', component: DashboardComponent},
    { path: 'users', component: AdminuserListComponent}
];