import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResultSectionComponent } from './components/result-section/result-section.component';
import { SummarySectionComponent } from './components/summary-section/summary-section.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultSectionComponent,
    SummarySectionComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
