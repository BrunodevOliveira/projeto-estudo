import { ExemplosRoutingModule } from './exemplos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindigComponent } from './data-bindig/data-bindig.component';
import { FormsModule } from '@angular/forms';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PipesComponent } from './pipes/pipes.component';



@NgModule({
  declarations: [
    DataBindigComponent,
    DiretivasComponent,
    PipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExemplosRoutingModule
  ],
  exports: [
    DataBindigComponent
  ]
})
export class ExemplosModule { }
