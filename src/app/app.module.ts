import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { GitHttpService } from './git-http.service';

@NgModule({
  declarations: [
    AppComponent,
    E404Component,
    HomeComponent,
    NavComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
