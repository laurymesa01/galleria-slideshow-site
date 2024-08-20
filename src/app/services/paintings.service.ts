import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Painting } from '../models/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {

  private http = inject(HttpClient);
  private url = 'http://localhost:3000';

  constructor() { }

  getPaintings(){
    return this.http.get<Painting[]>(`${this.url}/paintings`);
  }

}
