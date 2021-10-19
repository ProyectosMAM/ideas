/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-indice',
	templateUrl: './indice.component.html',
	styleUrls: ['./indice.component.scss']
})
export class IndiceComponent {
	constructor(private router: Router) { }

	grid() {
		void this.router?.navigate(['/grid1']);
	}

	retrasometro() {
		void this.router?.navigate(['/retrasometro']);
	}

	SimpleLineChart() {
		void this.router?.navigate(['/SimpleLineChart']);
	}

	GaugeComponent() {
		void this.router?.navigate(['/GaugeComponent']);
	}

	Gauge1Component() {
		void this.router?.navigate(['/Gauge1Component']);
	}

	DualAxes() {
		void this.router?.navigate(['/DualAxes']);
	}

	Wizard() {
		void this.router?.navigate(['/Wizard']);
	}

	Rating() {
		void this.router?.navigate(['/Rating']);
	}

	Dropdown() {
		void this.router?.navigate(['/Dropdown']);
	}
}

