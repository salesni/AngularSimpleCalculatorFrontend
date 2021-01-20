import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BackserviceService {

  headers:any;

  constructor(private http: HttpClient) { }

  logIn(bodyUser:bodyUser){
    const url=`http://localhost:8090/api/security/oauth/token`;

    const body = new HttpParams()
    .set('username', bodyUser.username)
    .set('password', bodyUser.password)
    .set('grant_type',bodyUser.grant_type);

    this.headers= new HttpHeaders().set('Content-Type',  'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic ' + btoa('frontendApp' + ':' + '12345'));
      console.log(this.headers);
      return this.http.post<any>(url,body.toString(),{headers:this.headers})
      .pipe(map( (data:any) => 
        data['access_token']
      ));
  }

  newUser(user:User){
    const url=`http://localhost:8090/api/usuarios/newUser`;
    //console.log(user);
    //console.log(url);
    return this.http.post<any>(url,user);

  }

  getUserId(username:string, token:string){
    const url=`http://localhost:8090/api/usuarios/usuarios/search/buscar-username?username=${username}`;

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this.http.get(url,{headers:headers});
  }

  calculate(operationObject:operationObject, token:string){


    const url=`http://localhost:8090/api/operation/operaciones`;
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });

    return this.http.post<any>(url,operationObject,{headers:headers});
  }

  getOperations(id:number, token:string){
    const url=`http://localhost:8090/api/operation/operacionesByUserId/${id}`;
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this.http.get(url,{headers:headers});
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


class bodyUser{
  username!:string;
  password!: string;
  grant_type:string = "password";

}