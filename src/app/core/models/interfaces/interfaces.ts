import { Genre, Platform } from "../enums/enums";

export interface Games {
    id:                     number;
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
