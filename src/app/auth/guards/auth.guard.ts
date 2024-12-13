import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService)
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getUserToken();
    if (!user) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
