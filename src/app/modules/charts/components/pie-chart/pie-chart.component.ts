import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { ChartsConstants } from '../../charts-constants';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public data: Array<any> = new Array<any>();
  public serieName: string;

  @ViewChild('chart') chart: ElementRef;

  constructor(public chartsConstants: ChartsConstants,
    public constants: Constants) { }

  ngOnInit() {
    this.data = [
      { value: 335, name: 'Germany', color: '#ffc94d' },
      { value: 310, name: 'France', color: '#42aaff' },
      { value: 234, name: 'Canada', color: '#ff708d' },
      { value: 135, name: 'Russia', color: '#2ce69b' },
      { value: 1548, name: 'USA', color: '#598bff' },
    ];
    this.serieName = 'Countries';
  }

  createConfirm(data: Array<any>) {
    console.log(data);
  }

  editConfirm(data: Array<any>) {
    console.log(data);
  }

  deleteConfirm(data: Array<any>) {
    console.log(data);
  }

}
