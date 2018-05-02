import { Routes } from '@angular/router';

import { AdminimageListComponent } from "../adminimage/adminimage-list/adminimage-list.component";
import { AdminimageCreateComponent } from "../adminimage/adminimage-create/adminimage-create.component";
import { AdminimageDeleteComponent } from "../adminimage/adminimage-delete/adminimage-delete.component";
import { AdminimageEditComponent } from "../adminimage/adminimage-edit/adminimage-edit.component";

export const adminimageRoutes: Routes = [
    { path: 'images', component: AdminimageListComponent},
    { path: 'images/create', component: AdminimageCreateComponent},
    { path: 'images/delete/:id', component: AdminimageDeleteComponent},
    { path: 'images/edit/:id', component: AdminimageEditComponent }
];