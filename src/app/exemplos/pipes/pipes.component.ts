import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  date = new Date(1992,10,19)
  nome = 'Bruno oliveira'
  percentual = 0.557865
  salario = 3000
  user = {name: 'bruno', id: 1}

  constructor() { }

  ngOnInit(): void {
  }

}
