import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './indice/indice.component';
import { Grid1Component } from './pages/grid1/grid1.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent, IndiceComponent, Grid1Component],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
