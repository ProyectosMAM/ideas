import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { Grid1Component } from './pages/grid1/grid1.component';

const routes: Routes = [
	{ path: 'home', component: IndiceComponent },
	{ path: 'grid1', component: Grid1Component },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
