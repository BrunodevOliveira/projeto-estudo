import { Repository } from './../../exemplos/app-github/models/repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

 private readonly baseUrl = 'https://api.github.com' //começo padrão de todo EndPoint

  constructor(private http: HttpClient) { }

  //<Repository[]> é a tipagem do meu Observable e Observable é a tipagem da minha função. Isso acontece pois o observable tem uma tipagem fraca epode gerar inconsistências no retorno.
  getUserRepositories(username:string): Observable <Repository[]> {
    const url = `${this.baseUrl}/users/${username}/repos` //montagem da URL

    //this.http.get é um método HTTP e <Repository[]> mostra o tipo que tenho como retorno
    return this.http.get<Repository[]>(url)

  }
}
