import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DonateComponent } from './pages/donate/donate.component';
import { ProduceComponent } from './pages/produce/produce.component';
import { RequestComponent } from './pages/request/request.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',             component: HomeComponent },
  { path: 'donate',     component: DonateComponent },
  { path: 'produce',           component: ProduceComponent },
  { path: 'request',          component: RequestComponent },
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

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
