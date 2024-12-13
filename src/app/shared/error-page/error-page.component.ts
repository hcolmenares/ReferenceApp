import { Component, inject } from '@angular/core';
import { CakeComponent } from '../cake/cake.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CakeComponent],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export default class ErrorPageComponent {
  private router = inject( Router );

  goTo(): void {
    this.router.navigateByUrl('home');
  }
}
