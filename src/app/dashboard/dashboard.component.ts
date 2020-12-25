import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    
    scales: {  
       xAxes: [{
      ticks: { fontColor: 'black' },
      stacked: true
     
    }],
    yAxes: [{
      ticks: { fontColor: 'black' },
      stacked: true
    }]
   },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
    
  };
  // Doughnut
  public doughnutChartDatasets = [
    [50, 25, 25],
    
  ];
  public doughnutChartColors: any[] = 
  [
      {
          backgroundColor: ['#2e7be5','#a6c5f7','#d2ddec'],
          borderColor: ['#2e7be5','#a6c5f7','#d2ddec'],
          borderWidth: 2
      }
  ]
  public chartOptions = {
    responsive: true,
    cutoutPercentage: 85,
    tooltips: {
      enabled: false
    }
  };

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: Label[] = ['Direct', 'Organic', 'Referral'];

  public barChartLabels: Label[] = ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 11', 'Oct 12'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
   {    data: [0, 10, 20, 30, 40, 50, 60,70,80,90,60,110,48,],label: 'Series A',
        backgroundColor: ['#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5'],
        hoverBackgroundColor:['#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5','#2e7be5'],
        
        barPercentage: 1,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
},

  ];

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }

  // line chart
  public lineChartData: ChartDataSets[] = [
    { data: [0, 90, 20, 30, 40,10,80],label: 'Series A' }
  ];
  public lineChartLabels: Label[] = ['Oct 3', 'Oct 6', 'Oct 9', 'Oct 12', 'Oct 15', 'Oct 18', 'Oct 21', 'Oct 24', 'Oct 27', 'Oct 30'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
         
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: '#2e7be5',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: '#2e7be5',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: any[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#2e7be5',
      pointBackgroundColor: '#2e7be5',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2e7be5'
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  

}
