import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { subscribeOn } from 'rxjs';
import { ApiserService } from '../apiser.service';
import { EmployeeModel} from '../employee.models';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  formValue !:FormGroup
  constructor(private formbuilder:FormBuilder,private api:ApiserService){ }
  empmodelobj=new EmployeeModel();
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      phoneno:[''],
      salary:['']
    })
  }
  postEmployee(){
    this.empmodelobj.firstName=this.formValue.value.firstname
    this.empmodelobj.lastName=this.formValue.value.lastname
    this.empmodelobj.phone=this.formValue.value.phoneno
    this.empmodelobj.email=this.formValue.value.email
    this.empmodelobj.salary=this.formValue.value.salary

    this.api.postEmp(this.empmodelobj)
    .subscribe(res=>{
      console.log(res);
      alert("employee is added")
    },
    err=>{
      alert("something wrong!!")
    })
  }
}
