import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeetcodeViewComponent } from './leetcode-view/leetcode-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LeetcodeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // for httpClient use, we need to import the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
