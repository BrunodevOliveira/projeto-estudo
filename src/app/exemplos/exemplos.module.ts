import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { DataBindigComponent } from './data-bindig/data-bindig.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    DataBindigComponent,
    DiretivasComponent,
    PipesComponent,
    CriacaoPipesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExemplosRoutingModule,
    CompartilhadoModule,
  ],
  exports: [
    DataBindigComponent
  ]
})
export class ExemplosModule { }
