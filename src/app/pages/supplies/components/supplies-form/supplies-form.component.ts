import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'supplies-form',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './supplies-form.component.html',
  styleUrl: './supplies-form.component.scss',
})
export class SuppliesFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private validatorService = inject(ValidatorsService);
  public units: string[] = environment.units;

  supplyForm: FormGroup = this.fb.group({
    recipe: ['', Validators.required],
    supplies: this.fb.array([this.createSupplyGroup()]),
  });

  get supplies(): FormArray {
    return this.supplyForm.get('supplies') as FormArray;
  }

  createSupplyGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      presentation: [0, Validators.required],
      unit: [this.units[0], Validators.required],
      price: [0, Validators.required],
      amount: [0, Validators.required],
      recipeUnit: [this.units[0], Validators.required],
      recipePrice: [0, Validators.required],
    });
  }

  addSupply(): void {
    this.supplies.push(this.createSupplyGroup());
  }

  removeSupply(index: number): void {
    this.supplies.removeAt(index);
  }

  isValidField(field: string, index?: number): boolean | null {
    if (index == null) {
      return this.validatorService.isValidField(this.supplyForm, field);
    }
    else {
      return this.validatorService.isValidField(this.supplies.at(index) as FormGroup, field);
    }
  }

  onSubmit(supplyForm: FormGroup): void {
    console.log(supplyForm.value);
  }
}
