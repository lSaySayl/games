import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Games } from '../models/interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private apiDetails: string = 'https://free-to-play-games-database.p.rapidapi.com/api/game';
  private apiUrlRapid: string =
    'https://free-to-play-games-database.p.rapidapi.com/api/games';

  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '24f27993e8msh631d7568a74a4e0p1a091fjsn7613b32c5ea1',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  });

  constructor(private _http: HttpClient) {}

  getGames(): Observable<Games[]> {
    return this._http.get<Games[]>(this.apiUrlRapid, { headers: this.headers });
  }

  getGamesByCategory(category: string): Observable<Games[]> {
    return this._http.get<Games[]>(`${this.apiUrlRapid}?category=${category}`, {
      headers: this.headers,
    });
  }

  getGameDetails(id: string): Observable<Games> {
    return this._http.get<Games>(`${this.apiDetails}?id=${id}`, {
      headers: this.headers,
    });
  }


}
