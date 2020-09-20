import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartData: string[];
  @Input() doughnutChartLabels: number[];
  @Input() doughnutChartType: string;
  @Input() leyend: string;

  constructor() { }

  ngOnInit() {
  }

}
