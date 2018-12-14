import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//add service and then add to providers
import {ConnectService} from './connect.service';
// declare http then imports
import {HttpClientModule} from '@angular/common/http';

import { from } from 'rxjs';
import { NewsreaderComponent } from './newsreader/newsreader.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsreaderComponent,
    NewsdetailComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
