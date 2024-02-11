import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Games } from 'src/app/core/models/interfaces/game.interface';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html'
})
export class GameDetailsComponent {
  gameId: string = '';
  gameDetails!: Games;

  constructor(
    private _route: ActivatedRoute,
    private _gamesService: GamesService 
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.gameId = params['id'];
      this.loadGameDetails(this.gameId);
    });
  }

  loadGameDetails(id: string): void {
    this._gamesService.getGameDetails(id).subscribe(data => {
      this.gameDetails = data;
    });
  }

}
