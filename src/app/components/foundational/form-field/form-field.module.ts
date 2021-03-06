import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [FormFieldComponent],
  exports: [FormFieldComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class FormFieldModule { }
