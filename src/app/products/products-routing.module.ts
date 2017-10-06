import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadComponent } from './lad/lad.component';
import { ProductComponent } from './product/product.component';
import { ProductGuardService } from './product-guard.service';

const routes: Routes = [
    {path: '', component: LadComponent},
    {path: 'products', component: LadComponent},
    {path: 'products/:id',
      canActivate: [ProductGuardService],
      component: ProductComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
