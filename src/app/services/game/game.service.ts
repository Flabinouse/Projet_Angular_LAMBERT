import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Game } from 'src/app/models/game.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private dbPath = '/game';
  gamesRef: AngularFirestoreCollection<Game>;
  private games: any;
  gameSubject = new Subject<any[]>();

  constructor(
    private db: AngularFirestore
  ) {
    this.gamesRef = db.collection(this.dbPath);
   }

  getGameById(id: string): any {
    let tmp;
    for (const game of this.games) {
      if (game.id == id) {
        tmp = game;
      }
    }
    return tmp;
  }

  emitGameSubject(): void {
    this.gameSubject.next(this.games.slice());
  }

  getAllGames(): Observable<any[]> {
    return this.gamesRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  newGame(game: Game): Observable<Game> {
    return  new Observable(observer => {
      this.gamesRef.add({...game}).then(() => {
        observer.next();
      });
    });
  }

  get(id: any): any {
    return new Observable(observer => {
      this.gamesRef.doc(id).get().subscribe(res => {
        observer.next({id: res.id, ...res.data()});
      });
    });
  }

  updateGame(game: Game): Observable<Game> {
    return new Observable(observer => {
      this.gamesRef.doc(game.id).update({...game}).then(() => {
        observer.next();
      });
    });
  }

  deleteGame(id: any): void {
    console.log(`[DELETE] ${id}`);
    this.db.doc(`game/${id}`).delete();
  }
}
