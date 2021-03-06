import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
})
export class GitHttpService {
   apiRoot: string = 'https://api.github.com/users'
   apikey: string = ''
   results: any;
   repoClass: any;
   result2!: string;
   loading!: boolean;
   result: string;

   constructor(private httpClient: HttpClient) {

     this.results = [];
     this.repoClass = [];
     this.result = '';
     this.loading = false;
   }

   search(term: string) {
     interface ApiResponse {
       login: string;
       public_repos: any;
     }
     let promise = new Promise<ApiResponse>((resolve, reject) => {
       let apiURL = `${this.apiRoot}/${term}`;
       this.httpClient.get<ApiResponse>(apiURL).toPromise().then(response => {
         // return response.json()
         if (response) {
           console.log(response)
           this.results = response
           this.repoClass = response
           // this.result2 = response.public_repos
           console.log(this.results)

           console.log(this.repoClass)

           resolve(this.results)
         }

       },
       )
     })
     return promise;
   }


    }

