import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {
  
  //Requisite variables.
  value:number=0;
  result:string="";
  quantity:number=0;
  flag:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
 
  //click function invoked on the Click Me button click.
  click():void
  {
    this.result="Click Me button clicked!";  
  }

  
  inc():void
  {
    this.value+=1;
  }


  minus():void
  {
    this.quantity-=1;
    if(this.quantity==0)
    this.flag=true;
    
  }


  plus():void
  {
    this.quantity+=1;
    if(this.quantity>0)
    this.flag=false;
  }

}
