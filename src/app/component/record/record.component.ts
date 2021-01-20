import { Component, OnInit } from '@angular/core';
import { BackserviceService } from 'src/app/services/backservice.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  superOperations:any[]=[];
  operations:string[]=["ADD","SUBSTRACT","DIVISION","MULTIPLICATION",
"SQUARE ROOT","LOG10","EXPONENTIAL","POW"];
  constructor(private service:BackserviceService) { 
    this.getOperations();
  }

  ngOnInit(): void {
  }

  getOperations(){
    const user_id:number=Number(sessionStorage.getItem("user_id"));
    const token:string =String(sessionStorage.getItem("token"));
    return this.service.getOperations(user_id,token).subscribe((data:any)=>{
      //console.log(data);
      this.superOperations=data;
      //console.log(this.superOperations);

    });

  }

  getOperationName(type:number){

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
