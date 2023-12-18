import { Injectable } from '@angular/core';
import { Animes } from './animes.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {


  constructor(private http: HttpClient) { }

  animes : Animes[] = [
    {name: "Shigatsu no uso", synopsis: "Arima Kosei meets Kaori Miyazono and everything change", episodes: 22, score: 10, categories: ["romance", "music", "slice of life", "drama"]},
    {name: "Sangatsu no lion", synopsis: "Miyamura is a fucking shogi genious", episodes: 12, score: 10, categories: ["slice if life", "drama"]},
    {name: "One piece", synopsis: "Luffy will be the pirate king", episodes: 1094, score: 10, categories: ["action", "fantasy"]}
  ]

  backEndUrl: string;
  /*getAnimes () {
    return this.animes;
  }*/

    getAnimes(): Observable<any> {
    return this.http.get(`${this.backEndUrl}/animes/`);
  }

    getAnimesByCat(category: string): Observable<any> {
    return this.http.get(`${this.backEndUrl}/animes/query/${category}`);
  }

    getAllCategories(): Observable<any> {
      return this.http.get(`${this.backEndUrl}/animes/categories`);
    }

    postAnime(anime: Animes) {
      return this.http.post(`${this.backEndUrl}/flights`, anime).subscribe(data =>{
    })
  }

    deleteAnime(id: number) {
    
  }

  getBackEndUrl(): string {
    const segements = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segements[2]) ? 'http://localhost:3002' : 'https://nestjs-typeorm-postgres.herokuapp.com';
  }
}
