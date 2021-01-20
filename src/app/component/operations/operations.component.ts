import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BackserviceService } from 'src/app/services/backservice.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  @ViewChild('input')
  input!: ElementRef;

  items: number[]=[];
  mayor: boolean = false; 
  operation:number=1;
  angular:any;
  error:boolean=false;
  found:boolean=false;
  operationString:string="";
  first:boolean=false;


  constructor(private service:BackserviceService) { }

  
  ngOnInit(): void {
  }
 
  array(number: any){
    if (number >= 21){
      this.mayor = true;
    }else{
      this.mayor = false; 
    }
    var temp=[];
    for(var i=0;i<number; i++)
      temp.push(i);
    this.items=temp;
  }

  setOperation(op: number){
    this.operation=op;
    console.log(op);
  }

  calcular(){
     var opt:operationObject = new operationObject();
     opt.op_id=this.operation;
     opt.us_id=Number(sessionStorage.getItem("user_id"));
     var temp:number;
     if(this.operation===8)
      opt.base=Number((<HTMLInputElement>document.getElementById("base")).value);
    for(var i=0; i<this.items.length;i++){
      temp =Number((<HTMLInputElement>document.getElementById("input"+i)).value);
      //console.log(temp);
      this.items[i]=temp;
    }
    //console.log(this.items);
    opt.numbers=this.items;
     //console.log(opt);
     const token:string =String(sessionStorage.getItem("token"));
     return this.service.calculate(opt,token).subscribe((data:any)=>{
       //console.log(data);
       this.error = data['error'];
       this.found = data['found'];
       this.operationString = data ['operation'];
       this.first=true;
     }, (error:any) =>  {
      alert("Token Expired Log out and Sign In Again :v");
    });
  }



}


class operationObject{
  id!:number;
  op_id!:number;
  us_id!:number;
  operation!:String;
  answer!:number;
  numbers!:number[];
  base!:number;
  error:boolean=false;
  isFound:boolean=false;
  constructor(){}
}
