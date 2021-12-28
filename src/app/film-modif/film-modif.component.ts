import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-film-modif',
  templateUrl: './film-modif.component.html',
  styleUrls: ['./film-modif.component.scss']
})
export class FilmModifComponent implements OnInit {
  film: any = null;
  change: boolean = false;

  constructor(
    private Film: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Film.get(id).subscribe((value: any) => {
      console.log(value)
      this.film = value;
    });
  }

  modif() {
    this.Film.update(this.film).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
