import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = 'Bruno Gomes';
  idade = 29

  linkImagem = 'https://images.pexels.com/photos/9926161/pexels-photo-9926161.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

  larguraImagem = 30
  alturaImagem = 30

  calculaAnoNascimento():number {
    const today = new Date()

    return today.getFullYear() - this.idade
  }

  aumentar() {
    this.larguraImagem += 20
    this.alturaImagem += 15
  }

  diminuir() {
    this.larguraImagem -= 20
    this.alturaImagem -= 15
  }
}
