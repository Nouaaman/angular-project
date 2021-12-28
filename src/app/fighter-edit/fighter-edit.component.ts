import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FighterService } from '../services/fighter/fighter.service';

@Component({
  selector: 'app-fighter-edit',
  templateUrl: './fighter-edit.component.html',
  styleUrls: ['./fighter-edit.component.scss']
})
export class FighterEditComponent implements OnInit {
  fighter: any = null;
  change: boolean = false;

  constructor(
    private Fighter: FighterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Fighter.get(id).subscribe((value: any) => {
      console.log(value)
      this.fighter = value;
    });
  }

  edit() {
    this.Fighter.update(this.fighter).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
