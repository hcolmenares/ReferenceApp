import { Component, input } from '@angular/core';

@Component({
  selector: 'auth-title',
  standalone: true,
  imports: [],
  templateUrl: './auth-title.component.html',
  styleUrl: './auth-title.component.scss'
})
export class AuthTitleComponent {
  public title = input<string>('¡Hola!');
  public enfasis = input<string>('Nos alegra volver a verte');
  public subtitle = input<string>('Te damos la bienvenida a tu lugar especial');
}
