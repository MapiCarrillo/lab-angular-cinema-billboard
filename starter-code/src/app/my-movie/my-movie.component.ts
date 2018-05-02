import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { MovieSrv } from "../services/movie-srv.service";

@Component({
  selector: "app-my-movie",
  templateUrl: "./my-movie.component.html",
  styleUrls: ["./my-movie.component.css"],
  providers: [MovieSrv]
})
export class MyMovieComponent implements OnInit {
  idMovie: number;
  movie:object;
  constructor(private movies: MovieSrv, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params
    .subscribe((params) => this.idMovie = Number(params['id']));
    this.movie = this.movies.getMovie(this.idMovie);
  }}
 