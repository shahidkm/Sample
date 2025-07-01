import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserLogin } from '../../services/user-login';
@Component({
  selector: 'app-user-login',
  imports: [],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class LoginUser {
email:string="";
password:string="";
    constructor(private userLogin:UserLogin ){}
  async onSubmit():Promise<void>{
    try{
  const response=await this.userLogin.checkUserExists(this.email,this.password);
  console.log(response);
  
    }
    catch(error){
      console.log(error);
      
    }
  }
}
