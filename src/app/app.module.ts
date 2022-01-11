import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FighterComponent } from './fighter/fighter.component';
import { FormsModule } from '@angular/forms';
import { FighterService } from './services/fighter/fighter.service';
import { FighterEditComponent } from './fighter-edit/fighter-edit.component';
import { FighterAddComponent } from './fighter-add/fighter-add.component';
import { HomeComponent } from './home/home.component';
import { FighterListComponent } from './fighter-list/fighter-list.component';

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    FighterComponent,
    FighterEditComponent,
    FighterAddComponent,
    HomeComponent,
    FighterListComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    FighterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
