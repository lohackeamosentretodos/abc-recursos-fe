import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DonateComponent } from './pages/donate/donate.component';
import { ProduceComponent } from './pages/produce/produce.component';
import { RequestComponent } from './pages/request/request.component';
import { HomeComponent } from './pages/home/home.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SupportComponent } from './pages/support/support.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',             component: HomeComponent },
  { path: 'donate',     component: DonateComponent },
  { path: 'produce',           component: ProduceComponent },
  { path: 'request',          component: RequestComponent },
  { path: 'faq',          component: FaqComponent },
  { path: 'tracking',          component: TrackingComponent },
  { path: 'support',          component: SupportComponent },
  { path: 'search/:text',          component: SearchComponent },
  { path: 'contact',          component: ContactComponent },
  {
    path: 'request',
    loadChildren: './pages/request/request.component.module#RequestModule',
  },
  {
    path: 'produce',
    loadChildren: './pages/produce/produce.component.module#ProduceModule',
  },
  {
    path: 'donate',
    loadChildren: './pages/donate/donate.component.module#DonateModule',
  },
  {
    path: 'faq',
    loadChildren: './pages/faq/faq.component.module#FaqModule',
  },
  {
    path: 'traking',
    loadChildren: './pages/tracking/tracking.component.module#TrackingModule',
  },
  {
    path: 'support',
    loadChildren: './pages/support/support.component.module#SupportgModule',
  },
  {
    path: 'contact',
    loadChildren: './pages/contact/contact.component.module#ContactModule',
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true,
      scrollPositionRestoration:'top',
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
