import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Fighter } from "src/app/models/fighter.model";

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
}) 
export class FighterService {
  private dbPath = '/fighters';
  fightersRef: AngularFirestoreCollection<Fighter>;
  // private films?: any;
  // filmSubject = new Subject<any[]>();

  constructor(
    private db: AngularFirestore
  ) {
    this.fightersRef = db.collection(this.dbPath);
  }

  getAllFighters(): any {

    return this.fightersRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })
        })
      })
    );
  }

  saveNewFighter(fighter: Fighter): any {
    return new Observable(obs => {
      this.fightersRef.add({ ...fighter }).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.fightersRef.doc(id).get().subscribe(res => {
        obs.next({ id: res.id, ...res.data() });
      });
    });
  }

  update(fighter: Fighter) {
    return new Observable(obs => {
      this.fightersRef.doc(fighter.id).update(fighter);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`Fighter/${id}`).delete()
  }


  /* 
    private films = [
      {
        id: 1,
        title: 'Once upon a time in the West',
        onAir: false,
        filmAffiche: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Once_upon_a_Time_in_the_West.jpg'
      },
      {
        id: 2,
        title: 'West Side Story - 2021',
        onAir: true,
        filmAffiche: 'https://upload.wikimedia.org/wikipedia/en/2/2e/West_Side_Story_2021_Official_Poster.jpg'
      },
      {
        id: 3,
        title: 'Annette',
        onAir: true,
        filmAffiche: 'https://fr.web.img2.acsta.net/pictures/21/06/01/12/08/4034608.jpg'
      },
      {
        id: 4,
        title: 'West Side Story ',
        onAir: false,
        filmAffiche: 'https://fr.web.img3.acsta.net/medias/nmedia/18/36/35/66/18629177.jpg'
      }, {
        id: 5,
        title: 'Pandora',
        onAir: false,
        filmAffiche: 'https://media.senscritique.com/media/000019191694/source_big/Pandora.jpg'
      },
      {
        id: 6,
        title: 'Paris, Texas',
        onAir: false,
        filmAffiche: 'https://i.pinimg.com/originals/7e/1b/ea/7e1bead0975885cabdabba93a23c5263.jpg'
      },
    ] */


  /* emitFilmSubject() {
    this.filmSubject.next(this.films.slice());
  }
  setOnAir() {
    for (const film of this.films) {
      film.onAir = true;
    }
    this.emitFilmSubject();
  }
  setNoOnAir() {
    for (const film of this.films) {
      film.onAir = false;
    }
    this.emitFilmSubject();

  }
  switchOnAir(index: number) {
    this.films[index].onAir = !this.films[index].onAir;
    this.emitFilmSubject();
  }

  getFilmByID(id: number) {
    let tmp;
    for (const film of this.films) {
      if (film.id == id) {
        tmp = film;
      }
    }
    return tmp;
  } */
}
