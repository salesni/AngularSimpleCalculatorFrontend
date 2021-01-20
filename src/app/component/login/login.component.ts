import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackserviceService } from 'src/app/services/backservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:BackserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  
  
  
  login(username:string, password:string){
      var bodyRequest:bodyUser = new bodyUser();
      bodyRequest.username=username;
      bodyRequest.password=password;

      //console.log(bodyRequest);
      return this.service.logIn(bodyRequest).subscribe((token:any)=>{

          sessionStorage.setItem("token",token);
          sessionStorage.setItem("username",bodyRequest.username);
          alert("WELCOME :v");
          this.router.navigate(['/operations']);
          this.service.getUserId(bodyRequest.username,token).subscribe((user:any)=>{
            sessionStorage.setItem("user_id",user['id']);
          });
        //console.log(token.access_token);
      }, (error:any) =>  {
        alert("Invalid Credentials :v");
        this.router.navigate(['/home']);
    });
  }
  

}

class bodyUser{
  username!:string;
  password!: string;
  grant_type:string = "password";

}