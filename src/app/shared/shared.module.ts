import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbThemeService } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Constants } from './constants';
import { ChartsService } from './services/charts.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [NbThemeService, Constants, ChartsService],
})
export class SharedModule {}
