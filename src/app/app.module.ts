import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from './theme/theme.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MainMenu } from './core/MainMenu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MainMenu],
  bootstrap: [AppComponent]
})
export class AppModule { }
