import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { DualAxesComponent } from './pages/dual-axes/dual-axes.component';
import { GaugeComponent } from './pages/gauge/gauge.component';
// import { Gauge1Component } from './pages/gauge1/gauge1.component';
import { Grid1Component } from './pages/grid1/grid1.component';
import { RetrasometroComponent } from './pages/retrasometro/retrasometro.component';
import { SimpleLineChartComponent } from './pages/simple-line-chart/simple-line-chart.component';

const routes: Routes = [
	{ path: 'home', component: IndiceComponent },
	{ path: 'grid1', component: Grid1Component },
	{ path: 'retrasometro', component: RetrasometroComponent },
	{ path: 'SimpleLineChart', component: SimpleLineChartComponent },
	{ path: 'GaugeComponent', component: GaugeComponent },
	// { path: 'Gauge1Component', component: Gauge1Component },
	{ path: 'DualAxes', component: DualAxesComponent },

	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
