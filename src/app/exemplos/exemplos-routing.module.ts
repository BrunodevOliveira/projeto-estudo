import { PipesComponent } from './pipes/pipes.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindigComponent } from './data-bindig/data-bindig.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'data-binding',
    component: DataBindigComponent,
  },
  {
    path: 'diretivas',
    component:DiretivasComponent
  },
  {
    path:'pipes',
    component:PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplosRoutingModule {}
