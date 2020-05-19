import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DchartPage } from './dchart.page';

const routes: Routes = [
  {
    path: '',
    component: DchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DchartPageRoutingModule {}
