import { Component, EventEmitter, inject, Output, OnInit } from '@angular/core';
import { ValidatorsService } from '../../../../shared/services/validators.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // Inyecta ActivatedRoute
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
export class SuppliesFormComponent implements OnInit { // Implementa OnInit
  @Output() studentCreated = new EventEmitter<Student>();

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private validatorService = inject(ValidatorsService);
  private route = inject(ActivatedRoute); // Inyecta ActivatedRoute

  public units: string[] = environment.units;
  @Output() closeView = new EventEmitter<void>();

  studentForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    referCode: ['', Validators.required], // Este es el campo que vamos a llenar automáticamente
    contacts: this.fb.array([]),
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

  removeContact(index: number): void {
    this.contacts.removeAt(index);
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const referCode = params['referCode']; 
      if (referCode) {
        this.studentForm.patchValue({
          referCode: referCode
        });
      }
    });
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
