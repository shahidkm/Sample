import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserRegister {
  private apiUrl = 'http://localhost:3100/users';


  async checkEmailExists(email: string): Promise<boolean> {
    const response = await axios.get<User[]>(`${this.apiUrl}?email=${email}`);
     if(response.data.length > 0){
      return true;
     }
     else{
      return false;
     }
  }


  async registerUser(data: User): Promise<string> {
    const exists = await this.checkEmailExists(data.email);
    if (exists) {
      throw new Error('Email is already registered');
    }

    await axios.post(this.apiUrl, data);
    return 'User Registered Successfully';
  }

}
