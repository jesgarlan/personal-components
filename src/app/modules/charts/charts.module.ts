import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NbCardModule } from '@nebular/theme';
import { ChartsConstants } from './charts-constants';
import { Constants } from 'src/app/shared/constants';


@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    FormsModule,
    SharedModule,
    NbCardModule
  ],
  providers:[
    ChartsConstants,
    Constants
  ]
})
export class ChartsModule { }
