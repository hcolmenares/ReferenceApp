import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { catchError, map, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { RegisterRequest } from '@auth/interfaces/register-request.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.apiAuth;
  private readonly registerUrl: string = environment.apiRegister;
  private http = inject(HttpClient);
  private helper: JwtHelperService = new JwtHelperService();

  constructor() {}

  login(userName: string, password: string) {
    const body = { userName, password };
    return this.http
      .post<AuthResponse>(this.baseUrl, body, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((response: any) => {
          this.setToken(response);
          return true;
        }),
        catchError((err) => throwError(() => err.statusText))
      );
  }

  register(user: RegisterRequest) {
    return this.http
      .post<boolean>(this.registerUrl, user, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((response: any) => {
          alert('Usuario registrado con éxito');

        }),
        catchError((err) => throwError(() => err.statusText))
      );
  }

  isAutheticated() {
    let isAuthenticated = false;
    const token = this.getToken();
    if (token !== null) {
      // const isExpired = this.helper.isTokenExpired(token);
      isAuthenticated = true;
    }

    return isAuthenticated;
  }

  logout() {
    localStorage.removeItem(environment.localStorageTokenKey);
  }

  getToken() {
    const rawToken = localStorage.getItem(environment.localStorageTokenKey);
    return rawToken;
  }

  setToken(token: string) {
    localStorage.setItem(environment.localStorageTokenKey, token);
  }

  getUserToken() {
    const token = this.getToken();
    if (token === null) return null;

    const decodedToken = this.helper.decodeToken(token);
    const user: IUser = {
      id: decodedToken['sid'],
      userName: decodedToken['user'],
      email: decodedToken['email'],
      name: `${decodedToken['nombre']}`,
      initials: `${decodedToken['siglas']}`,
      charge: `${decodedToken['puesto']}`,
      role: `${decodedToken['rol']}`,
    };

    return user;
  }
}
