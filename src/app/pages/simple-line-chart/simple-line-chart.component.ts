import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
	selector: 'app-simple-line-chart',
	templateUrl: './simple-line-chart.component.html',
	styleUrls: ['./simple-line-chart.component.scss']
})
export class SimpleLineChartComponent {
	highcharts = Highcharts;

	chartOptions: Highcharts.Options = {
		title: {
			text: 'Infosys stock value'
		},
		xAxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			]
		},
		yAxis: {
			title: {
				text: 'Infosys Stock value in dollar'
			}
		},
		series: [
			{
				data: [12, 8, 43, 35, 20, 90, 100, 110],
				type: 'line'
			}
		]
	};
}
