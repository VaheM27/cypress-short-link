import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShortenFormComponent } from './shorten-form/shorten-form.component';
import { ShortenedLinksComponent } from './shortened-links/shortened-links.component';

@NgModule({
  declarations: [AppComponent, ShortenFormComponent, ShortenedLinksComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
