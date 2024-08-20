import { Component, OnInit, inject, signal } from '@angular/core';
import { PaintingsService } from '../../services/paintings.service';
import { Painting } from '../../models/painting.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private paintings_service = inject(PaintingsService);
  paintings = signal<Painting[]>([]);

  ngOnInit() {
    this.paintings_service.getPaintings().subscribe({
      next: (paintings) => {
        this.paintings.set(paintings);
      }
    })
  }
}
