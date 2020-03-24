import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { RequestRoutingModule } from './request.component.routing';

@NgModule({
  imports: [
    CommonModule,
    RequestRoutingModule
  ],
  declarations: [
    RequestComponent,
  ],
  exports: [
    RequestComponent,
  ],
})
export class RequestModule {}
