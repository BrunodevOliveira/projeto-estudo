import { Repository } from './models/repository';
import { GithubService } from './../../compartilhado/services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-github',
  templateUrl: './app-github.component.html',
  styleUrls: ['./app-github.component.scss']
})
export class AppGithubComponent implements OnInit {

  username = ''
  repositories: Repository[] = []

  loading = false
  error = false

  getUserRepositores() {
    this.loading = true
    this.error = false

    if(this.username.length > 0){

      //Chamo a função criada no github.service passando username como parâmetro e invocando meu Observable com subscribe({})
      //Não preciso interromper com complete: pq é um Observable do Angular e ele se encerra automaticamente
      this.githubService.getUserRepositories(this.username).subscribe({
        next: (data) => {
          this.repositories = data
          this.loading = false
        },
        error: (err) => {
          this.loading = false
          this.error = true
        }
      })

    }
  }

  constructor(private githubService: GithubService) { } //injeto o servço que criei em github.service

  ngOnInit(): void {
  }

}
