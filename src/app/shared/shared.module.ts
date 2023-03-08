import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Constants } from './constants';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MenubarModule,
    TabViewModule
  ],
  exports: [MenuBarComponent],
  providers: [Constants],
})
export class SharedModule {}
