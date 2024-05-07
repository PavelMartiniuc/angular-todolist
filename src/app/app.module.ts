import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductStaticRepository } from './model/repositories/product.static.respositiry';
import { StaticDataSource } from './dataSource/static.datasource';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StaticDataSource ,ProductStaticRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
