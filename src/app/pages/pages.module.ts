import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { MainMenu } from '../core/MainMenu';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule
  ],
  providers: [MainMenu]
})
export class PagesModule { }
