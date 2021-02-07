import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LivroReadAllComponent} from "./livro-read-all/livro-read-all.component";
import {LivroCreateComponent} from "./livro-create/livro-create.component";
import {LivroUpdateComponent} from "./livro-update/livro-update.component";
import {LivroDeleteComponent} from "./livro-delete/livro-delete.component";
import {LivroReadComponent} from "./livro-read/livro-read.component";

const routes: Routes = [
  {
    path: 'categorias/:id_cat/livros',
    component: LivroReadAllComponent
  },
  {
    path: 'categorias/:id_cat/livros/create',
    component: LivroCreateComponent
  },
  {
    path: 'categorias/:id_cat/livros/:id/update',
    component: LivroUpdateComponent
  },
  {
    path: 'categorias/:id_cat/livros/:id/delete',
    component: LivroDeleteComponent
  },
  {
    path: 'categorias/:id_cat/livros/:id/read',
    component: LivroReadComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
