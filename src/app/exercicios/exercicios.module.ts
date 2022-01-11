import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { PacienteComponent } from './paciente/paciente.component';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent,
    PacienteComponent
  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule
  ],
  //Exporto para que meu componente exercicio-um seja visivel em outro módulo
  exports: [
    ExercicioUmComponent,
    ExercicioDoisComponent
  ]
})
export class ExerciciosModule { }
