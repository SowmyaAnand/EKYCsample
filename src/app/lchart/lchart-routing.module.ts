import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LchartPage } from './lchart.page';

const routes: Routes = [
  {
    path: '',
    component: LchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LchartPageRoutingModule {}
