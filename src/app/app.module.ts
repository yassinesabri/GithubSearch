/**
 * Created by sabri on 4/7/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProfileComponent} from './profile.component';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule ,HttpModule,FormsModule],
  declarations: [ AppComponent ,ProfileComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
