// src/app/home/home.component.ts

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  navigate(url: string) {
    window.location.href = url;
  }
}
