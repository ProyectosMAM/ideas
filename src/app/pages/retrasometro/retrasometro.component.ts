import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
	selector: 'app-retrasometro',
	templateUrl: './retrasometro.component.html',
	styleUrls: ['./retrasometro.component.scss']
})
export class RetrasometroComponent implements OnInit {
	constructor() {}
	Highcharts: typeof Highcharts = Highcharts; // required
	chartConstructor = 'chart'; // optional string, defaults to 'chart'
	// chartOptions: Highcharts.Options = { ... }; // required
	// chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
	updateFlag = false; // optional boolean
	oneToOneFlag = true; // optional boolean, defaults to false
	runOutsideAngular = false; // optional boolean, defaults to false

	ngOnInit(): void {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		Highcharts.chart(
			'container',
			{
				chart: {
					type: 'gauge',
					plotBackgroundColor: '',
					plotBackgroundImage: '',
					plotBorderWidth: 0,
					plotShadow: false
				},

				title: {
					text: 'Retrasometro'
				},

				pane: {
					startAngle: -150,
					endAngle: 150,
					background: [
						{
							backgroundColor: {
								linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
								stops: [
									[0, '#FFF'],
									[1, '#333']
								]
							},
							borderWidth: 0,
							outerRadius: '109%'
						},
						{
							backgroundColor: {
								linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
								stops: [
									[0, '#333'],
									[1, '#FFF']
								]
							},
							borderWidth: 1,
							outerRadius: '107%'
						},
						{
							// default background
						},
						{
							backgroundColor: '#DDD',
							borderWidth: 0,
							outerRadius: '105%',
							innerRadius: '103%'
						}
					]
				},

				// the value axis
				yAxis: {
					min: 0,
					max: 450,

					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2
						// rotation: 'auto'
					},
					title: {
						text: 'días'
					},
					plotBands: [
						{
							from: 0,
							to: 30,
							color: '#55BF3B' // green
						},
						{
							from: 30,
							to: 60,
							color: '#DDDF0D' // yellow
						},
						{
							from: 60,
							to: 200,
							color: '#D0782A' // red
						},
						{
							from: 200,
							to: 450,
							color: '#DF5353' // red
						}
					]
				},

				series: [
					{
						name: 'Speed',
						data: [{ y: 405 }],
						type: 'gauge',
						tooltip: {
							valueSuffix: ' días'
						}
					}
				]

				//   series: [{
				//     name: 'Speed',
				//     data: [80],
				//     tooltip: {
				//         valueSuffix: ' km/h'
				//     }
				// }]
			},
			// Add some life
			function (chart) {
				//   if (!chart.renderer.forExport) {
				//     setInterval(function () {
				//       var point = chart.series[0].points[0],
				//         newVal,
				//         inc = Math.round((Math.random() - 0.5) * 20);
				//       newVal = point.y + inc;
				//       if (newVal < 0 || newVal > 200) {
				//         newVal = point.y - inc;
				//       }
				//       point.update(newVal);
				//     }, 3000);
				//   }
			}
		);
	}
}
