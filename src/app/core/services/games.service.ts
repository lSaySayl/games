import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Games } from '../models/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl:string = environment.baseUrl;
  private apiUrlRapid:string  = environment.baseUrlRapid;
  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '24f27993e8msh631d7568a74a4e0p1a091fjsn7613b32c5ea1',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  });

  constructor(private _http:HttpClient ) { }

  getGames(): Observable<Games[]>{
    return this._http.get<Games[]>(this.apiUrlRapid, {headers: this.headers});
  }

}
