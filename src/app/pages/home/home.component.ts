import { Component } from '@angular/core';
import { MenubarComponent } from '../../shared/menubar/menubar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenubarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
