import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormResolver } from './core/resolvers/form.resolver';
import { FormService } from './core/services/form.service';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [],
  providers: [
    FormResolver,
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
