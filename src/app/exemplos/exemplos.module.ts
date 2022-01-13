import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { DataBindigComponent } from './data-bindig/data-bindig.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { AppSorteioComponent } from './app-sorteio/app-sorteio.component';
import { AppGithubComponent } from './app-github/app-github.component';

@NgModule({
  declarations: [
    DataBindigComponent,
    DiretivasComponent,
    PipesComponent,
    CriacaoPipesComponent,
    AppSorteioComponent,
    AppGithubComponent,
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
