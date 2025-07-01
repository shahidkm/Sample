import { Component,Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-movie-card',
  standalone:true,
  imports: [],
  templateUrl: './movie-card.html',
  styleUrls: ['./movie-card.css']
})
export class MovieCard {
@Input() movie!:Movie;
}
