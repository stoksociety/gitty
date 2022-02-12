import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Git_App';
  imageSrc = 'assets/joker.jpeg'
  imageAlt = 'The Joker'
  results!: any
  p = '*click button again to confirm search*'

  constructor(private git: GithubRequestService) { }

  ngOnInit(): void {
  }

}

repo!: Repos

doSearch(term: string) {
  this.git.search(term);
  this.results = this.git.results
  this.git.search(`${term}/repos`)
  this.repo = this.git.repos
  console.log(this.results)
}
onSubmission() { }


ngOnInit(): void {
  this.repo = new Repos(0)
}

