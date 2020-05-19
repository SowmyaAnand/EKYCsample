import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DchartPageRoutingModule } from './dchart-routing.module';

import { DchartPage } from './dchart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DchartPageRoutingModule
  ],
  declarations: [DchartPage]
})
export class DchartPageModule {}
