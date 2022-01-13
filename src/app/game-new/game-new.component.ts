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
  public verifPost : boolean = false;
  public verifAllPost!: boolean;

  constructor(
    private Game: GameService
  ) { }

  ngOnInit(): void {
    this.game = new Game();
  }

  add() {
    this.verifPost = true;
    if(this.game.cover === '' || this.game.platform === '' || this.game.name === '' || this.game.genre === '' || this.game.editor === '' || this.game.releaseDate === '' || this.game.description === '' || this.game.age === '') {
      alert('Veuillez remplir tous les champs');
    } else {
      this.Game.newGame(this.game).subscribe(() => {
        alert('Votre jeu a bien été ajouté');
        this.game = new Game();
        this.verifPost = false;
      });
    }
  }
}
