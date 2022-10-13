import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employeemodal } from '../shared/employeemodal';
import { SharedserviceService } from '../shared/sharedservice.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  empList!:any;
  edit:boolean = false;
  title = 'CRUD Operations with Angular';

  @ViewChild(AddEmployeeComponent, { static: true })
  child!: AddEmployeeComponent;
  constructor(private sharedService : SharedserviceService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  addNewItem() {
  this.edit= false;
    this.child.AddEmpolyee();
  }
  getEmployees(){
    this.sharedService.getEmployeees().subscribe((data)=>{
      this.empList = data;
      console.log(this.empList);
      console.log("Refresh grid with all employes");
    });
  }


  deleteEmp(emp:any){
   this.child.deleteEmployee(emp);
  }

  editEmp(emp:Employeemodal){
    this.edit = true;
   this.child.editEmp(emp);
  }

}
