import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent, WindowRef } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
