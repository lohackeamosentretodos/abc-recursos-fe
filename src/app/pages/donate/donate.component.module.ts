import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate.component';
import { DonateRoutingModule } from './donate.component.routing';

@NgModule({
  imports: [
    CommonModule,
    DonateRoutingModule
  ],
  declarations: [
    DonateComponent,
  ],
  exports: [
    DonateComponent,
  ],
})
export class DonateModule {}
