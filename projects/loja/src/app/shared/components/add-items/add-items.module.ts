import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemsComponent } from './add-items.component';



@NgModule({
  declarations: [AddItemsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddItemsComponent
  ]
})
export class AddItemsModule { }
