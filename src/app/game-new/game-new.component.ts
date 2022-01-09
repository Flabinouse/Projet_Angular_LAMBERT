import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {

  public game!: Game;

  constructor(
    private Game: GameService
  ) { }

  ngOnInit(): void {
    this.game = new Game();
  }

  add() {
    this.Game.newGame(this.game).subscribe(() => {
      this.game = new Game();
    });
  }

}
