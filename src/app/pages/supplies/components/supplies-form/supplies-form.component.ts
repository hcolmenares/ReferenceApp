import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ValidatorsService } from '../../../../shared/services/validators.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../../prime-ng/prime-ng.module';
import { environment } from '../../../../../environments/environment';
import { Student } from '../../../interfaces/student.interface';

@Component({
  selector: 'supplies-form',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './supplies-form.component.html',
  styleUrl: './supplies-form.component.scss',
})
export class SuppliesFormComponent {
  @Output() studentCreated = new EventEmitter<Student>();

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private validatorService = inject(ValidatorsService);

  public units: string[] = environment.units;
  @Output() closeView = new EventEmitter<void>();

  studentForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      referCode: ['', Validators.required],
      contacts: this.fb.array([]),
      Refers: this.fb.array([]),
      incentives: this.fb.array([])
  });

  get contacts(): FormArray {
    return this.studentForm.get('contacts') as FormArray;
  }

  get Refers(): FormArray {
    return this.studentForm.get('Refers') as FormArray;
  }

  get incentives(): FormArray {
    return this.studentForm.get('incentives') as FormArray;
  }

  addContact(contact: string): void {
    this.contacts.push(this.fb.control(contact, Validators.required));
  }

  addRefer(refer: string): void {
    this.Refers.push(this.fb.control(refer, Validators.required));
  }

  addIncentive(incentive: string): void {
    this.incentives.push(this.fb.control(incentive, Validators.required));
  }

  removeContact(index: number): void {
    this.contacts.removeAt(index);
  }

  removeRefer(index: number): void {
    this.Refers.removeAt(index);
  }

  removeIncentive(index: number): void {
    this.incentives.removeAt(index);
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.studentCreated.emit(this.studentForm.value);
      this.studentForm.reset();
    }
  }

  closeForm(): void {
    this.closeView.emit();
  }
}
