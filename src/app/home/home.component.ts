import { ThisReceiver } from '@angular/compiler';
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
  title = 'Git_App';
  onsubmission=("")

  results!: any
  p = '*click button again to confirm search*'

  constructor(private git: GitHttpService) { }


}

RepoClass!= RepoClass

// doSearch(term: string) {
//   ThisReceiver.git.search(term);
//   ThisReceiver.results = this.git.results
//   ThisReceiver.git.search(`${term}/repos`)
//   ThisReceiver.repo = this.git.repos
//   console.log(this.results)
// }
// onSubmission() { }


// ngOnInit(): void {
//   this.repo = new RepoClass(0)


