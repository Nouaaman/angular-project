import { Component, OnInit } from '@angular/core';
import { Fighter } from '../models/fighter.model';
import { FighterService } from '../services/fighter/fighter.service';

@Component({
  selector: 'app-fighter-add',
  templateUrl: './fighter-add.component.html',
  styleUrls: ['./fighter-add.component.scss']
})
export class FighterAddComponent implements OnInit {
  public fighter!: Fighter
  constructor(
    private Fighter: FighterService
  ) { }

  ngOnInit(): void {
    this.fighter = new Fighter()
  }
  add() {
    this.Fighter.saveNewFighter(this.fighter).subscribe(() => {
      this.fighter = new Fighter()
    })

  }

}
