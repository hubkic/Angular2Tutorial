import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import { LadComponent } from './lad/lad.component';
import { CovertToSpacePipe } from './shared/convert-to-space.pipe';
import { SubladComponent } from './sublad/sublad.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DashboardComponent,
    LadComponent,
    CovertToSpacePipe,
    SubladComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
