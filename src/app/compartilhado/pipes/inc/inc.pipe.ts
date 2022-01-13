import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inc',
  pure: false, //O PIPE puro n ve  um push() como uma mudaça primitiva (que altere a referência na memória) e por isso n adiciona o número ao array
})
export class IncPipe implements PipeTransform {

  transform(array: number[]): number[] {
    return array.map((n) => n + 1);
  }

}
