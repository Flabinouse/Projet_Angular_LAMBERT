import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.css']
})
export class GameUpdateComponent implements OnInit {

  game: any;
  change: boolean = false;

  constructor(
    private Game: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];    
    this.Game.get(id).subscribe((data: any) => {
      this.game = data;
    });
  }

  modify() {
    this.Game.updateGame(this.game).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    });
  }
}
