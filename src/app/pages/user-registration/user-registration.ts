import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserRegister } from '../../services/user-register';
@Component({
  selector: 'app-user-registration',
  imports: [FormsModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.css'
})
export class UserRegistration {
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  constructor(private userRegister:UserRegister ){}
async onSubmit():Promise<void>{
  try{
const response=await this.userRegister.registerUser(this.user);
console.log(response);

  }
  catch(error){
    console.log(error);
    
  }
}
}
