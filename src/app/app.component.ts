import { Component, OnInit } from '@angular/core';
import { GamesService } from './core/services/games.service';
import { Games } from './core/models/interfaces/game.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'games';
  games: Games[] = [];

  constructor(private _gamesService: GamesService) {}

  ngOnInit() {
    console.log("Hola");
    this.getGames();
  }

  getGames() {
    this._gamesService.getGames().subscribe(
      {
        next: (response) => {
          this.games = response;
          console.log(this.games);
        },
        error: (error) => {
          console.log(error);
        },
      }
    );
  }
}
