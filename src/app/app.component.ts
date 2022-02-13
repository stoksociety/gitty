import { NgModule,Component,Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { GitHttpService } from './git-http.service';
import { InfoClass } from './info-class';
import { RepoClass } from './repo-class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-app';
  results!: any

  constructor(private git: GitHttpService) {

  }

  // results!:Info
  repo!: RepoClass

  doSearch(term: string) {
    this.git.search(term);
    this.results = this.git.results
    this.git.search(`${term}/repos`)
    this.repo = this.git.repoClass
    console.log(this.results)
  }
  onSubmission() { }

  ngOnInit(): void {
    this.repo = new RepoClass("")
  }
}
