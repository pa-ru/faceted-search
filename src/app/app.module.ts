import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fakeBackendHttpInterceptorProvider } from './httpinterceptors/fake-backend.httpinterceptor';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SearchModule
  ],
  providers: [
    fakeBackendHttpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
