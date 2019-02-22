import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NguTabModule } from '../../../tab/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NguTabModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
