import { Component, OnInit } from '@angular/core';
import { BackserviceService } from 'src/app/services/backservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


   

  
  constructor(private service:BackserviceService) { }

  ngOnInit(): void {
  }
  newUser( username:string, nombre:string,apellido:string, email:string,password:string, repeatPassword:string){
    if(password===repeatPassword){
      var user:User;
      var xd:roles[] = [{"id":1}];
      user=new  User(username,password,true,nombre,apellido,email,xd);
      console.log(user);
      this.service.newUser(user).subscribe((us:any) => {
        //console.log(us);
      });
     //this.user1.push(username); 
      
    }
    else{
      alert("PASSWORDS DO NOT MATCH");
    }
  }

}









class User{
  username:string;
  password:string;
  enabled:boolean;
  nombre:string;
  apellido:string;
  email:string;
  roles:roles[] =[];

constructor(username: string, password:string, 
  enabled:boolean, nombre:string,apellido:string,
  email:string, roles:roles[]){
  this.username=username;
  this.password=password;
  this.enabled=enabled;
  this.nombre=nombre;
  this.apellido=apellido;
  this.email=email;
  this.roles=roles;
}
}

class roles{
  id:number;
  constructor(id:number){
    this.id=id;
  }
}