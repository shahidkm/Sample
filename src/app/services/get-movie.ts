import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetMovie {
  async getMovieService(): Promise<Movie[]> {
    const response = await axios.get<Movie[]>("http://localhost:3100/movies");
    console.log('=====',response);
    
    return response.data;
  }
}
