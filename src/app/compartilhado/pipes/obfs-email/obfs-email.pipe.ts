import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obfsEmail'
})
export class ObfsEmailPipe implements PipeTransform {

  transform(email: string) {
    const [user, dominio] = email.split('@') //separa o email em dois arrays tendo como separador o @ utilizando a desestruturação.

    const initial = user[0] //Pego o primeiro caractere armazenado em user

    const obfs = "*".repeat(user.length - 1) //Gera o caracter * para cada elemento de user, exceto o primeiro

    return `${initial}${obfs}@${dominio}`
  }

}
