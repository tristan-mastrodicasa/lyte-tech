import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ServicesComponent } from './views/services/services.component';
import { AboutComponent } from './views/about/about.component';
import { TermsComponent } from './views/terms/terms.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    ServicesComponent,
    AboutComponent,
    TermsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
