import { Component } from '@angular/core';
import { MenubarComponent } from '../../shared/menubar/menubar.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { SuppliesFormComponent } from './components/supplies-form/supplies-form.component';
import { Student } from '../interfaces/student.interface';
import { SuppliesListComponent } from './components/supplies-list/supplies-list.component';

@Component({
  selector: 'app-supplies',
  standalone: true,
  imports: [
    MenubarComponent,
    PrimeNgModule,
    SuppliesFormComponent,
    SuppliesListComponent,
  ],
  templateUrl: './supplies.component.html',
  styleUrl: './supplies.component.scss'
})
export default class SuppliesComponent {
  isForm: boolean = false;

  supplies: Student[] = [
    {
      id: '1',
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      contacts: [],
      referCode: 'ABC123',
      referlink: 'http://localhost:4200/#/supplies/ABC123',
      Refers: ['Jane Smith', 'Robert Brown'],
      incentives: ['Free Course', 'Discount']
    },
    {
      id: '2',
      name: 'Jane Smith',
      phone: '987-654-3210',
      email: 'jane.smith@example.com',
      contacts: [],
      referCode: 'XYZ456',
      referlink: 'http://localhost:4200/#/supplies/XYZ456',
      Refers: ['John Doe'],
      incentives: ['Gift Card']
    },
    {
      id: '3',
      name: 'Robert Brown',
      phone: '555-555-5555',
      email: 'robert.brown@example.com',
      contacts: [],
      referCode: 'LMN789',
      referlink: 'http://localhost:4200/#/supplies/LMN789',
      Refers: [],
      incentives: ['Free Trial']
    }
  ];

  changeView(): void {
    this.isForm = !this.isForm;
  }
}
