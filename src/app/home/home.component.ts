
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import  { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatSlideToggleModule, MatIcon ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  navigate(url: string) {
    window.location.href = url;
  }
}
