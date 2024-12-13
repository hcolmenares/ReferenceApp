import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../interfaces/menuItem.interface';
import { AuthService } from '@auth/service/auth.service';

@Component({
  selector: 'shared-menubar',
  standalone: true,
  imports: [],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  private router = inject( Router );
  private authServive = inject( AuthService );
  private logOutString: string = 'logout';

  public menuItems: MenuItem[] = [
    {
      title: 'Inicio',
      route: 'home'
    },
    {
      title: 'Estudiantes',
      route: 'supplies'
    },
    {
      title: 'Referidos',
      route: 'refers'
    },
    {
      title: 'Incentivos',
      route: 'incentives',
    },
    {
      title: 'Salir',
      route: this.logOutString,
    },
  ]

  goTo(url: string) {
    url === this.logOutString ? this.onLogOut() : this.router.navigateByUrl(url);
  }

  onLogOut(): void {
    this.authServive.logout();
    this.router.navigateByUrl('/auth');
  }
}
