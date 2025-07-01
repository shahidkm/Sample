import { Component, OnInit } from '@angular/core';
import { GetMovie } from '../../services/get-movie';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common'; 
import { MovieCard } from '../../shared/movie-card/movie-card';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCard,Navbar,Footer,FormsModule],
  templateUrl: './movie-list.html'
})
export class MovieList implements OnInit {
  movies: Movie[] = [];
  greet: string = 'Hello from MovieList';

  constructor(private getMovie: GetMovie) {}

  async ngOnInit(): Promise<void> {
    this.movies = await this.getMovie.getMovieService();
  }
    
}