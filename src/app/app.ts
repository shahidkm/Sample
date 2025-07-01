import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCard } from './shared/movie-card/movie-card';
import { MovieList } from './pages/movie-list/movie-list';
import { UserRegistration } from './pages/user-registration/user-registration';
import { LoginUser } from './pages/user-login/user-login';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieCard, MovieList,UserRegistration,LoginUser],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ Fixed key here
})
export class App {
  protected title = 'flixmovies';
}
