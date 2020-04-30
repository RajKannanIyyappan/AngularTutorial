import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { Sample1Component } from './sample1/sample1.component';
import { CustomerComponent } from './account/customer/customer.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateformComponent } from './templateform/templateform.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample1Component,
    CustomerComponent,
    ReactiveComponent,
    TemplateformComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
