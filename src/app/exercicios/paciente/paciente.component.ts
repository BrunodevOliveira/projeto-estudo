import { Paciente } from './models/paciente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  pacientes:Paciente [] = [
    {id: 1, nome: 'Bruno', nascimento: new Date(2000,5,22), cpf: '111.111.111-22', email: 'bruno@gmail.com', acoes: 'Funções'},
    {id: 2, nome: 'Gomes', nascimento: new Date(1999,7,11), cpf: '111.111.111-22', email: 'bruno@gmail.com', acoes: 'Funções'},
    {id: 3, nome: 'Oliveira', nascimento: new Date(1992,10,19), cpf: '111.111.111-22', email: 'bruno@gmail.com', acoes: 'Funções'},
  ]

  deletar(id:number) {
    this.pacientes = this.pacientes.filter(paciente => paciente.id !== id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
