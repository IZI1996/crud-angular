import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
employeeForm:FormGroup=new FormGroup({});
emplyeeObj:EmployeeModel=new EmployeeModel();
employeeList:EmployeeModel[]=[];

constructor(){
  this.createForm();
  const oldData=localStorage.getItem('EmpDta')
  if(oldData!=null){
    const parseData=JSON.parse(oldData);
    this.employeeList=parseData;
  }

}
createForm(){
  this.employeeForm=new FormGroup({
    empid:new FormControl(this.emplyeeObj.empId),
    name:new FormControl(this.emplyeeObj.name),
    city:new FormControl(this.emplyeeObj.city),
    adress:new FormControl(this.emplyeeObj.adress),
    contactNo:new FormControl(this.emplyeeObj.contactNo),
    emailId:new FormControl(this.emplyeeObj.emailId),
    pinCode:new FormControl(this.emplyeeObj.pinCode),
    state:new FormControl(this.emplyeeObj.state)
  })

 
}
onSave(){
  const oldData=localStorage.getItem('EmpDta')
  if(oldData!=null){
    const parseData=JSON.parse(oldData);
    this.employeeForm.controls['empid'].setValue(parseData.length +1)
    this.employeeList.unshift(this.employeeForm.value)
  }else{
    this.employeeList.unshift(this.employeeForm.value)
  }
localStorage.setItem('EmpData',JSON.stringify(this.employeeList))
}
}
