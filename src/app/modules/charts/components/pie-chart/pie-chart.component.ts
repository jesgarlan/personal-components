import { Component, OnInit } from '@angular/core';
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

  constructor(public chartsConstants: ChartsConstants,
    public constants: Constants) { }

  ngOnInit() {
    this.data = [
      { value: 335, name: 'Germany' },
      { value: 310, name: 'France' },
      { value: 234, name: 'Canada' },
      { value: 135, name: 'Russia' },
      { value: 1548, name: 'USA' },
    ];
    this.serieName = 'Countries';
  }

}
