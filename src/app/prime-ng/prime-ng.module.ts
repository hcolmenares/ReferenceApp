import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ]
})
export class PrimeNgModule { }
