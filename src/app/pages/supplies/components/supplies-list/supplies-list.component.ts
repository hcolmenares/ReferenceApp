import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNgModule } from '../../../../prime-ng/prime-ng.module';
import { Student } from '../../../interfaces/student.interface';

@Component({
  selector: 'supplies-list',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './supplies-list.component.html',
  styleUrl: './supplies-list.component.scss'
})
export class SuppliesListComponent {
  @Input() supplies: Student[] = [];
  @Output() addStudent = new EventEmitter<void>();

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'phone', header: 'Phone' },
    { field: 'email', header: 'Email' },
    { field: 'referCode', header: 'Refer Code' }
  ];

  onAddStudent(): void {
    this.addStudent.emit();
  }
}
