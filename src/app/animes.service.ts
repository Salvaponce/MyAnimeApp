import { Injectable } from '@angular/core';
import { Animes } from './animes.model';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  animes : Animes[] = [
    {name: "Shigatsu no uso", synopsis: "Arima Kosei meets Kaori Miyazono and everything change", episodes: 22, score: 10, categories: ["romance", "music", "slice of life", "drama"]},
    {name: "Sangatsu no lion", synopsis: "Miyamura is a fucking shogi genious", episodes: 12, score: 10, categories: ["slice if life", "drama"]},
    {name: "One piece", synopsis: "Luffy will be the pirate king", episodes: 1094, score: 10, categories: ["action", "fantasy"]}
  ]

  constructor() { }

  getAnimes () {
    return this.animes;
  }
}
