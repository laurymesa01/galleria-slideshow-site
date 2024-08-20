import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
