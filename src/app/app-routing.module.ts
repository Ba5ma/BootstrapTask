import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProComponent } from './manage-pro/manage-pro.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '1',        component: LoginComponent },
  { path: '2', component: DashboardComponent },
  { path: '3',        component: ManageProComponent },
  { path: '4',        component: NewprojectComponent },
  { path: '', redirectTo: '/1', pathMatch: 'full' }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
