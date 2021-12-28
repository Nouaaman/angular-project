
import { Component, OnInit } from '@angular/core';
import { FighterService } from '../services/fighter/fighter.service';

@Component({
  selector: 'app-fighter-list',
  templateUrl: './fighter-list.component.html',
  styleUrls: ['./fighter-list.component.scss']
})
export class FighterListComponent implements OnInit {
  fighters!: any;
  constructor(
    private fighter: FighterService
  ) { }

  ngOnInit(): void {
    this.fighter.getAllFighters().subscribe((data: any) => {
      this.fighters = data;
    });
  }

}

