import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.scss']
})
export class FilmNewComponent implements OnInit {
  public film!: Film
  constructor(
    private Film: FilmService
  ) { }

  ngOnInit(): void {
    this.film = new Film()
  }
  add() {
    this.Film.saveNEwFilm(this.film).subscribe(() => {
      this.film = new Film()
    })

  }

}
