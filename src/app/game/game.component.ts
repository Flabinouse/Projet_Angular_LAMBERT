import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() name: string = "";
  @Input() platform: string = "";
  @Input() cover: string = "";
  @Input() description: string = "";
  @Input() releaseDate: string = "";
  @Input() editor: string = "";
  @Input() age: string = "";
  @Input() genre: string = "";
  @Input() id: string = "";

  constructor(
    private Game: GameService
  ) { }

  ngOnInit(): void {
    console.log(this.name);
    
  }

  getPlatform(): string {
    return this.platform.toUpperCase();
  }

  onDetailGame(): void {
    console.log("Detail du jeu");
  }

  delete(){
    this.Game.deleteGame(this.id);
  }

}
