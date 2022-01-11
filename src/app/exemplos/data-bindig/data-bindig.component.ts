import { Student } from './models/students';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindig',
  templateUrl: './data-bindig.component.html',
  styleUrls: ['./data-bindig.component.scss']
})
export class DataBindigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  estudante:Student = {} as Student

  nomeCompleto = ''
  nome = 'Bruno oliveira'
  idade = 29
  link = 'https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'

  alerta() {
    alert("Seja bem-vindo(a)!")
  }

}
