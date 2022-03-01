import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbThemeService } from '@nebular/theme';
import { EchartPieGenericComponent } from './components/echart-pie-generic/echart-pie-generic.component';
import { ListGenericComponent } from './components/list-generic/list-generic.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Constants } from './constants';



@NgModule({
  declarations: [
    EchartPieGenericComponent,
    ListGenericComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    Ng2SmartTableModule
  ],
  exports: [
    EchartPieGenericComponent,
    ListGenericComponent
  ],
  providers: [NbThemeService, Constants]
})
export class SharedModule { }
