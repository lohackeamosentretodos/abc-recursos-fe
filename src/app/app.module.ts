import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DonateComponent } from './pages/donate/donate.component';
import { RequestComponent } from './pages/request/request.component';
import { ProduceComponent } from './pages/produce/produce.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SupportComponent } from './pages/support/support.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    RequestComponent,
    ProduceComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SupportComponent,
    FaqComponent,
    TrackingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
