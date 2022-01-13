import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter' //nome do meu PIPE que deve ser usado na view
})
export class FilterPipe implements PipeTransform {

  //O primeiro parâmetro será um array + simbolo do pipe | + Elemento que quero achar
  transform(data: string[], query: string): string[] {
    return data.filter(txt => txt.toLowerCase().startsWith(query.toLowerCase()))
  }
}
