import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";

import {CategoriaModule} from "./components/views/categoria/categoria.module";
import {LivroModule} from "./components/views/livro/livro.module";
import {ShareModule} from "./share/share.module";

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    // Módulos do Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,

    // Módulos dos componentes
    CategoriaModule,
    LivroModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
