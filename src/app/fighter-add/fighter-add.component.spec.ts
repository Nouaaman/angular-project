import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterAddComponent } from './fighter-add.component';

describe('FighterAddComponent', () => {
  let component: FighterAddComponent;
  let fixture: ComponentFixture<FighterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FighterAddComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
