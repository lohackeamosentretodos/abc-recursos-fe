import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduceRoutingModule } from './produce.component.routing';
import { ProduceComponent } from './produce.component';

@NgModule({
  imports: [
    CommonModule,
    ProduceRoutingModule
  ],
  declarations: [
    ProduceComponent,
  ],
  exports: [
    ProduceComponent,
  ],
})
export class ProduceModule {}
