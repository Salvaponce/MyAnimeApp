import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesService } from '../animes.service';
import { Animes } from '../animes.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  animes: Animes[];
  selectedCategory: string;
  filteredList: any[];

  constructor(private animesService : AnimesService) { }

  ngOnInit(): void {
    //this.animes = this.animesService.getAnimes();
    /*this.animesService.getAnimes().subscribe(data => {
      this.animes = data;
    })*/
    this.animesService.getAllCategories().subscribe(data => {
      this.filteredList = data;
    })
  }

  query(): void {
    const category = this.selectedCategory;
    this.animesService.getAnimesByCat(category).subscribe(data => {
      this.animes = data;
    })
  }

}
