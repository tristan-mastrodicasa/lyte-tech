import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ServicesComponent } from './views/services/services.component';
import { AboutComponent } from './views/about/about.component';
import { TermsComponent } from './views/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
