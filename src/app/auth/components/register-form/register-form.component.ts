import { Component, inject, input, output } from '@angular/core';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterRequest } from '@auth/interfaces/register-request.interface';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  private validatorService = inject(ValidatorsService);

  public isIconChange: boolean = false;
  public inputType: string = 'password';
  public registerForm = input.required<FormGroup>();
  public register = output<RegisterRequest>();

  toggleIcon(): void {
    this.isIconChange = !this.isIconChange;
    this.isIconChange
      ? (this.inputType = 'text')
      : (this.inputType = 'password');
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.registerForm(), field);
  }

  onSubmit() {
    if (this.registerForm().invalid) {
      this.registerForm().markAllAsTouched();
      return;
    }

    const registerReq: RegisterRequest = this.registerForm().value;
    this.register.emit(registerReq);
  }
}
