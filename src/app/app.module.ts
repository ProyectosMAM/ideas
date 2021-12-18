import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './indice/indice.component';
import { Grid1Component } from './pages/grid1/grid1.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RetrasometroComponent } from './pages/retrasometro/retrasometro.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SimpleLineChartComponent } from './pages/simple-line-chart/simple-line-chart.component';
import { GaugeComponent } from './pages/gauge/gauge.component';
import { DualAxesComponent } from './pages/dual-axes/dual-axes.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { RatingComponent } from './pages/rating/rating.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { SpreadComponent } from './pages/spread/spread.component';
import { ObservableComponent } from './pages/observable/observable.component';

// import { Gauge1Component } from './pages/gauge1/gauge1.component';

@NgModule({
	declarations: [

		AppComponent,
		HeaderComponent,
		FooterComponent,
		IndiceComponent,
		Grid1Component,
		RetrasometroComponent,
		SimpleLineChartComponent,
		GaugeComponent,
		DualAxesComponent,
		WizardComponent,
		RatingComponent,
		DropdownComponent,
  SpreadComponent,
  ObservableComponent
		// Gauge1Component
	],
	imports: [BrowserModule, FormsModule, AppRoutingModule, HighchartsChartModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
