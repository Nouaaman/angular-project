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
    private Fighter: FighterService
  ) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.Fighter.delete(this.id);
  }

}
