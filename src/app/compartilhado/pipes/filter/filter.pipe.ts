import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter', //nome do meu PIPE que deve ser usado na view
  //pure: false //Para exibir novas linguagens adicionadas no array linguagens
})
export class FilterPipe implements PipeTransform {

  //O primeiro parâmetro será um array + simbolo do pipe | + nome d PiPE: Elemento que quero achar (argumentos nesse caso o parâmetro query)
  transform(data: string[], query: string): string[] {
    return data.filter(txt => txt.toLowerCase().startsWith(query.toLowerCase()))
  }
}
