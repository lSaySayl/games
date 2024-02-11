import { Genre, Platform } from "../enums/game-enums";


export interface Games {
    id:                     string;
    title:                  string;
    thumbnail:              string;
    short_description:      string;
    game_url:               string;
    genre:                  Genre;
    platform:               Platform;
    publisher:              string;
    developer:              string;
    release_date:           string;
    freetogame_profile_url: string;
}
