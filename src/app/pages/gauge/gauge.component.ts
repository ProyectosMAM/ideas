import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/highcharts-more';
HC_exporting(Highcharts);

@Component({
	selector: 'app-gauge',
	templateUrl: './gauge.component.html',
	styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent {
	Highcharts: typeof Highcharts = Highcharts; // required
	chartConstructor = 'chart'; // optional string, defaults to 'chart'
	updateFlag = false; // optional boolean
	oneToOneFlag = true; // optional boolean, defaults to false
	runOutsideAngular = false; // optional boolean, defaults to false

	chartOptions: Highcharts.Options = {
		chart: {
			type: 'gauge',
			plotBackgroundColor: undefined,
			plotBackgroundImage: undefined,
			plotBorderWidth: 0,
			plotShadow: false
		},

		title: {
			text: 'Speedometer'
		},

		pane: {
			startAngle: -150,
			endAngle: 150,
			background: [
				{
					backgroundColor: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0, '#32CD32'],
							[1, '#32CD32']
						]
					},
					borderWidth: 0,
					outerRadius: '109%'
				},
				{
					backgroundColor: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0, '#32CD32'],
							[1, '#32CD32']
						]
					},
					borderWidth: 1,
					outerRadius: '107%'
				},
				{
					// default background
				},
				{
					backgroundColor: '#32CD32',
					borderWidth: 0,
					outerRadius: '105%',
					innerRadius: '103%'
				}
			]
		},

		// the value axis

		series: [
			{
				type: 'gauge',
				name: 'Speed',
				data: [80],
				tooltip: {
					valueSuffix: ' km/h'
				}
			}
		],

		yAxis: {
			min: 0,
			max: 200,
			minorTickInterval: 'auto',
			minorTickWidth: 1,
			minorTickLength: 10,
			minorTickPosition: 'inside',
			tickPixelInterval: 30,
			tickWidth: 2,
			tickPosition: 'inside',
			tickLength: 10,
			title: {
				text: 'km/h'
			},
			plotBands: [
				{
					zIndex: 20,
					from: 0,
					to: 120,
					color: '#32CD32' // green
				},
				{
					zIndex: 20,
					from: 120,
					to: 160,
					color: '#FFFF00' // yellow
				},
				{
					zIndex: 20,
					from: 160,
					to: 200,
					color: '#FF0000' // red
				}
			]
		}
	}; // required
	chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
		console.log(chart);
	}; // optional function, defaults to null
}
