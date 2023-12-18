import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesService } from '../animes.service';
import { Animes } from '../animes.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

  constructor(private animeService: AnimesService) {};
  
  name: string
  synopsis: string
  episodes: number
  categories: string[]
  score: number  

  ngOnInit(): void {
  }

  sendAnimes() {
    const anime: Animes = {
      name: this.name,
      synopsis: this.synopsis,
      episodes: this.episodes,
      categories: this.categories,
      score: this.score
    }
    this.animeService.postAnime(anime);
  }
  
}
