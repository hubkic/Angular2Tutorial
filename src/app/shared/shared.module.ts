import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovertToSpacePipe } from './convert-to-space.pipe';
import { FormsModule } from '@angular/forms';
import { SubladComponent } from '../products/sublad/sublad.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CovertToSpacePipe,
    SubladComponent
  ],
  exports: [
    FormsModule,
    CommonModule,
    SubladComponent,
    CovertToSpacePipe
  ]
})
export class SharedModule { }
