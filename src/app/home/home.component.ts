import { Component, OnInit } from '@angular/core';
import { RepoClass } from '../repo-class';
import { GitHttpService } from '../git-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = ' The_Git_App';
  onsubmission=("")

  results!: any
  p = '*please wait as we work to show you you!*'

  constructor(private git: GitHttpService) { }


}

RepoClass!=  RepoClass

// doSearch(term string) {
//   This.git.search(term);
//   This.results = this.git.results
//   This.git.search(`${'term'}/repos`)
//   This.repo = this.git.repos
//   consoole.log(this.results)
// }
// onSubmission() { }


// ngOnInit(): void {
//   RepoClass! = new RepoClass(0)

// }


