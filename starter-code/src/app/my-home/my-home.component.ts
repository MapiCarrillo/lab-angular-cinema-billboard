import { Component, OnInit } from '@angular/core';
import { MovieSrv } from '../services/movie-srv.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [MovieSrv]
})
export class MyHomeComponent implements OnInit {

  moviesArray = this.movies.getMovies();

  constructor(private movies: MovieSrv) { }

  ngOnInit() {
  }

}
