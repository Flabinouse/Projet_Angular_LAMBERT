import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {

  games!:any;
  gameSubscription: Subscription | undefined;

  constructor(
    private Game: GameService
  ) { }

  ngOnInit(): void {
    
    this.Game.getAllGames().subscribe((data: any) => {
      this.games = data;
      });
  }

  ngOnDestroy() {
    this.gameSubscription?.unsubscribe();
  }
}

