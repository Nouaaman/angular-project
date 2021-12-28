import { Component, OnInit, Input } from '@angular/core';
import { FighterService } from '../services/fighter/fighter.service';

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss']
})
export class FighterComponent implements OnInit {
  @Input() id?: string;
  @Input() fighterFullName?: string;
  @Input() fighterAge?: string;
  @Input() fighterPicture?: string;
  @Input() fighterCountry?: string;
  @Input() fighterRecord?: string;
  @Input() fighterWeightclass?: string;


  constructor(
    private Film: FighterService
  ) { }

  ngOnInit(): void {
  }

  // getOnAir() {
  //   return this.fighterOnAir;
  // }

  onWatchFilm() {
    console.log('Je regarde le Film');
  }

  // changeColor() {
  //   return this.fighterOnAir ? 'purple' : 'red';
  // }

  onSwitch() {
    // this.Film.switchOnAir(this.index);
    console.log('Switch le Film');
  }

  supp(): void {
    this.Film.delete(this.id);
  }

}
