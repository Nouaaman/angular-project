import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FighterListComponent } from './fighter-list/fighter-list.component';
import { FighterEditComponent } from './fighter-edit/fighter-edit.component';
import { FighterAddComponent } from './fighter-add/fighter-add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'fighters',
    component: FighterListComponent
  },
  {
    path: 'add',
    component: FighterAddComponent
  },
  {
    path: 'edit/:id',
    component: FighterEditComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
