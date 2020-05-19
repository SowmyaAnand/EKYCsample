import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LchartPageRoutingModule } from './lchart-routing.module';

import { LchartPage } from './lchart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LchartPageRoutingModule
  ],
  declarations: [LchartPage]
})
export class LchartPageModule {}
