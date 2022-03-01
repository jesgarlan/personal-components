import { Component, OnInit } from '@angular/core';
import { MainMenu } from '../core/MainMenu';

@Component({
  selector: 'app-pages',
  template: `
  <ngx-one-column-layout>
      <nb-menu [items]="menu.MENU_ITEMS"></nb-menu>
      <router-outlet></router-outlet>
  </ngx-one-column-layout>
`
})
export class PagesComponent implements OnInit {

  constructor(public menu: MainMenu) { }

  ngOnInit(): void {
  }

}
