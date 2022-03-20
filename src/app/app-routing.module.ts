import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'employee-details', component:EmployeeDashboardComponent, pathMatch:'full',
    children:[

    ]
 },
 {
  path:'bsmodal', component:BootstrapModalComponent
 },
 {
  path:'addEmployee', component:AddEmployeeComponent, pathMatch:'full'
},
  {
    path:'', component:EmployeeDashboardComponent, pathMatch : 'full'
  },
  {
    path:'**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
