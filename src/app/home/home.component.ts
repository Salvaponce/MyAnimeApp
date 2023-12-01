import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(animesService : AnimesService) { }

  ngOnInit(): void {
    
  }

  getAnime(){

  }

}
