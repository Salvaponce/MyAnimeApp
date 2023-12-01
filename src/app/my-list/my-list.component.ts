import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss'
})
export class MyListComponent {

}
