import { Component } from '@angular/core';
import { MenubarComponent } from '../../shared/menubar/menubar.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { SuppliesFormComponent } from './components/supplies-form/supplies-form.component';

@Component({
  selector: 'app-supplies',
  standalone: true,
  imports: [
    MenubarComponent,
    PrimeNgModule,
    SuppliesFormComponent
  ],
  templateUrl: './supplies.component.html',
  styleUrl: './supplies.component.scss'
})
export default class SuppliesComponent {

}
