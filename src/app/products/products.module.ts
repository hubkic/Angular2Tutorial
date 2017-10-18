import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { LadComponent } from './lad/lad.component';
import { SharedModule } from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    ProductComponent,
    LadComponent
  ]
})
export class ProductsModule { }
