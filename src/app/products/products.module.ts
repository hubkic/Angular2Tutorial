import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { LadComponent } from './lad/lad.component';
import { SubladComponent } from './sublad/sublad.component';
import { CovertToSpacePipe } from '../shared/convert-to-space.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  declarations: [
    ProductComponent,
    LadComponent,
    SubladComponent,
    CovertToSpacePipe
  ]
})
export class ProductsModule { }
