import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { E404Component } from './e404/e404.component';
const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'page', component: PageComponent },
  { path: '**', component: E404Component },

  { path: '', redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
