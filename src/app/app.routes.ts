import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { MyListComponent } from './my-list/my-list.component';

export const routes: Routes = [
    {path: 'home', component : HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'myList', component: MyListComponent}
];
