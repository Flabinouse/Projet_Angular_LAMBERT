import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game/game.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Projet-Angular-LAMBERT';
  games:any = [];
  time: number = 0;

  constructor(
    private Game: GameService
  ) {}

  ngOnInit(): void {
    const counter = interval(1000);

    counter.subscribe(n => {
      this.time = n;
    },
    error => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    });
  }
} 

