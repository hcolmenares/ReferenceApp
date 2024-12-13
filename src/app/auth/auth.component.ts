import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';
import { AuthTitleComponent } from '@auth/components/auth-title/auth-title.component';
import { LoginRequest } from '@auth/interfaces/loginRequest.interface';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { RegisterRequest } from './interfaces/register-request.interface';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    AuthFormComponent,
    RegisterFormComponent,
    AuthTitleComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export default class AuthComponent {
  private authServive = inject( AuthService );
  private fb = inject( FormBuilder );
  private router = inject( Router );

  protected isRegister: boolean = false;
  protected authString: string = '¿No tienes ninguna cuenta?';

  public isIconChange: boolean = false;
  public isError: boolean = false;
  public inputType: string = 'password';
  public loginImg: string = '/assets/img/login_1.jpg'

  registerForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    charge: ['Estudiante', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });

  loginForm: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  onLogin(user: LoginRequest) {
    const { userName, password } = user;
    this.authServive.login(userName, password).subscribe(
      resp => {
        if(resp) { this.onUserAuth(); }
      }
    );
  }

  onRegister(user: RegisterRequest) {
    this.authServive.register(user);
  }

  onUserAuth():void {
    this.authServive.getUserToken();
    this.router.navigate(['/home']);
  }

  changeFormsViews(): void {
    this.isRegister = !this.isRegister;
    this.isRegister ? this.authString = '¿Ya estás registrado?' : this.authString = '¿No tienes ninguna cuenta?';
  }
}
