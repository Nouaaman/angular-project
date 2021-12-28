import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() filmName?: string;
  @Input() filmOnAir?: boolean;
  @Input() filmAffiche?: string;
  @Input() filmCountry?: string;
  @Input() filmMusic?: string;
  @Input() filmProductor?: string;
  @Input() filmRealisator?: string;
  @Input() filmReleaseDate?: string;
  @Input() filmScenario?: string;
  @Input() filmSynopsis?: string;
  @Input() filmTime?: string;
  @Input() id?: string ;

  constructor(
    private Film: FilmService
  ) { }

  ngOnInit(): void {
  }

  getOnAir() {
    return this.filmOnAir;
  }

  onWatchFilm() {
    console.log('Je regarde le Film');
  }

  changeColor() {
    return this.filmOnAir ? 'purple' : 'red';
  }

  onSwitch() {
    // this.Film.switchOnAir(this.index);
  }

  supp():void {
    this.Film.delete(this.id);
  }

}
