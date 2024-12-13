import { Component, inject, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '@auth/interfaces/loginRequest.interface';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'auth-form',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  private validatorService = inject( ValidatorsService );

  public isIconChange: boolean = false;
  public inputType: string = 'password';
  public loginForm = input.required<FormGroup>();
  public user = output<LoginRequest>();

  toggleIcon(): void {
    this.isIconChange = !this.isIconChange;
    this.isIconChange ? this.inputType = 'text' : this.inputType = 'password';
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.loginForm(), field);
  }

  onSubmit() {
    if(this.loginForm().invalid) {
      this.loginForm().markAllAsTouched();
      return;
    };

    const logingReq: LoginRequest = this.loginForm().value;
    this.user.emit(logingReq);
  }
}
