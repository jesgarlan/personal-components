import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-echart-pie-generic',
  templateUrl: './echart-pie-generic.component.html',
  styleUrls: ['./echart-pie-generic.component.scss']
})
export class EchartPieGenericComponent implements AfterViewInit, OnDestroy {


  options: any = {};
  themeSubscription: any;
  echartsInstance: any;

  //Cada item de data será del formato { name: string, value:number  }
  @Input() data: Array<any> = new Array<any>();
  @Input() colores: Array<string> = new Array<string>();
  @Input() serieName: string;



  constructor(private theme: NbThemeService,
    private chartsService: ChartsService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      console.log(colors)
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.data.map(i => i.name),
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: this.serieName,
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  onChartInit(ec) {
    console.log(ec)
    this.echartsInstance = ec;
  }

  resizeChart() {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }


}
