import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserLogin {
  private apiUrl = 'http://localhost:3100/users';
   async checkUserExists(email: string,password:string): Promise<boolean> {
    const response = await axios.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`);
     if(response.data.length > 0){
      return true;
     }
     else{
      return false;
     }
  }
}
