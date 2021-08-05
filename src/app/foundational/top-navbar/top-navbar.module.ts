import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [MatTabsModule],
  exports: [MatTabsModule],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class MatTabsModule { }
