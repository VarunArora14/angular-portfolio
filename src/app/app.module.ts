import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeetcodeViewComponent } from './leetcode-view/leetcode-view.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponentComponent } from './intro-component/intro-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LeetcodeViewComponent,
    ProjectsViewComponent,
    IntroComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,// for httpClient use, we need to import the module
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
