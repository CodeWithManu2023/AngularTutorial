import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ReportsComponent } from './page/reports/reports.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [ 
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'report', component:ReportsComponent},
  { path: '**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
