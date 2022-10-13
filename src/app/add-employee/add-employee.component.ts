import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Employeemodal } from '../shared/employeemodal';
import { SharedserviceService } from '../shared/sharedservice.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  formvalue!: FormGroup;

  @Output() refreshEmpList = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Input() edit :boolean = false;

  employeeObj !: Employeemodal ;
  constructor(private formbuilder: FormBuilder, private sharedService : SharedserviceService) { }

  ngOnInit(): void {
    this.makeEmpObjEmpty();
  }

  AddEmpolyee(){
    this.employeeObj.id=this.formvalue.value.id;
    this.employeeObj.firstname = this.formvalue.value.firstname;
    this.employeeObj.lastname = this.formvalue.value.lastname;
    this.employeeObj.emailID = this.formvalue.value.emailID;
    this.employeeObj.salary = this.formvalue.value.salary;
    this.employeeObj.mobilenumber = this.formvalue.value.mobilenumber;
    if(!this.edit){

    this.sharedService.AddEmployeee(this.employeeObj).subscribe((data)=>{
      this.refreshEmpList.emit;
      this.makeEmpObjEmpty();
      alert('employee added');
    });
  }
  else{
    this.updateEmp()
  }
  }
  deleteEmployee(emp:Employeemodal){
    this.sharedService.deleteEmployee(emp.id).subscribe((data)=>{
      this.refreshEmpList.emit;
        alert('employee deleted');
    });
  }

  editEmp(emp:Employeemodal){
   this.updateFormValue(emp);
  }

  updateEmp(){
    this.sharedService.updateEmployee(this.employeeObj).subscribe((data)=>{
      this.refreshEmpList.emit;
      this.edit =false;
      this.makeEmpObjEmpty();
      alert('employee updated');
    });
  }

  updateFormValue(emp:Employeemodal){
    this.edit=true;
    this.formvalue = this.formbuilder.group({
      id:[emp.id],
      employeeID :[emp.id],
      firstname:[emp.firstname],
      lastname:[emp.lastname],
      emailID:[emp.emailID],
      salary:[emp.salary],
      mobilenumber:[emp.mobilenumber]
   });


  }

  makeEmpObjEmpty(){
    this.employeeObj= new Employeemodal();
    this.formvalue = this.formbuilder.group({
      employeeID :[''],
      firstname:[''],
      lastname:[''],
      emailID:[''],
      salary:[''],
      mobilenumber:['']
   });
  }

}
