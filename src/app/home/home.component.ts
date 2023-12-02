import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesService } from '../animes.service';
import { Animes } from '../animes.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  animes: Animes[];

  constructor(private animesService : AnimesService) { }

  ngOnInit(): void {
    this.animes = this.animesService.getAnimes();
  }

}
