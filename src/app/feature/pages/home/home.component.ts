import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Genre } from 'src/app/core/models/enums/game-enums';
import { Games } from 'src/app/core/models/interfaces/game.interface';
import { GamesService } from 'src/app/core/services/games.service';
import { loadGames, loadGamesFailure, loadGamesSucces } from 'src/app/core/store/actions/game.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'games';
  games: Games[] = [];
  categories: string[] = Object.values(Genre);
  gamesByCategory: Record<string, Games[]> = {};
  loading: boolean = true;

  loading$ = this._store.select('games', 'loading');

  constructor(
    private _gamesService: GamesService,
    private _store: Store<any>
  ) {}

  ngOnInit() {
    this._store.select('games').subscribe((state) => {
      this.loading = state.loading;
    });
    this.loadGamesByCategories();
  }

  loadGamesByCategories(): void {
    this.categories.forEach((category) => {
      this._store.dispatch(loadGames());
      this._gamesService.getGamesByCategory(category).subscribe({
        next: (games) => {
          this._store.dispatch(loadGamesSucces({ games, loading: false}));
          this.gamesByCategory[category] = games;
          this.loading = false;
        },
        error: (error) => {
          console.error(`Error loading ${category} games: ${error}`);
          this._store.dispatch(loadGamesFailure({ error }));
        },
      });
    });
  }

}
