import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MovieList } from './pages/movie-list/movie-list';
import { UserRegistration } from './pages/user-registration/user-registration';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MovieList,UserRegistration],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ Fixed key here
})
export class App {
  protected title = 'flixmovies';
}
