export class EmployeeModel {
    empId : number;
    name:string;
    city:string;
    state:string;
    emailId:string;
    contactNo:string;
    adress : string;
    pinCode:string;
    constructor(){
        this.adress='';
        this.city='';
        this.contactNo='';
        this.emailId='';
        this.empId=0;
        this.state='';
        this.name='';
        this.pinCode='';
    }
}