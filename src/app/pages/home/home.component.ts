import { Component, inject } from '@angular/core';
import { MenubarComponent } from '../../shared/menubar/menubar.component';
import { AuthService } from '@auth/service/auth.service';

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
  private authService = inject(AuthService);

  public getUser () {
    return this.authService.getUserToken();
  }
}
