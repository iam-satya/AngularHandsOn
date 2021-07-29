import { Injectable } from '@angular/core';
import { Employee } from 'Models/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService 
{
  //Creating a list of Employees.
  employeeList:Employee[]=
  [
    {
      id:1,
      name:"Watson",
      salary:29000,
      permanent:true,
      department:{id:1,name:"PayRoll"},
      skill:[{id:1,name:"Java"},{id:2,name:"Jsp"},{id:3,name:"Spring"}],
      dateOfBirth:new Date("1977-07-15"),
      photoURL:"assets/Images/A.jpg"
    },
    {
      id:2,
      name:"Aria",
      salary:35000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"PHP"},{id:2,name:"MYSQL"},{id:3,name:"React"}],
      dateOfBirth:new Date("1988-06-15"),
      photoURL:"assets/Images/B.jpg"
    },
    {
      id:3,
      name:"clay",
      salary:40000,
      permanent:false,
      department:{id:3,name:"HR"},
      skill:[{id:1,name:"c#"},{id:2,name:".NET"},{id:3,name:"React"}],
      dateOfBirth:new Date("1997-02-29"),
      photoURL:"assets/Images/C.jpg"
    },
    {
      id:4,
      name:"ryan",
      salary:20000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"AzureCloud"},{id:2,name:"Automation"},{id:3,name:"Java Script"}],
      dateOfBirth:new Date("1989-11-30"),
      photoURL:"assets/Images/K.jpg"
    },
    {
      id:5,
      name:"andy",
      salary:45000,
      permanent:false,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"Python"},{id:2,name:"Machine learning"},{id:3,name:"DeepLearning"}],
      dateOfBirth:new Date("1995-04-25"),
      photoURL:"assets/Images/E.jpg"
    }
  ];

  constructor() { }
  
  //Creating an empty employee object.
  empty_emp:any={};

  //Get all employees.
  getAllEmployees():Employee[]
  {
    return this.employeeList;
  }

  //Get employee by id.
  getEmployee(employeeId:number):Employee
  {
    

    this.employeeList.forEach(item => {
      if(item.id==employeeId)
      this.empty_emp=item;  
    });

    return this.empty_emp;
  }

}
