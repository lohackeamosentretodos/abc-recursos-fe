import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduceComponent } from './produce.component';

const routes: Routes = [
  {
    path: '',
    component: ProduceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduceRoutingModule {}
