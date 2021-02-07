import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriaReadComponent} from "./categoria-read/categoria-read.component";
import {CategoriaCreateComponent} from "./categoria-create/categoria-create.component";
import {CategoriaDeleteComponent} from "./categoria-delete/categoria-delete.component";
import {CategoriaUpdateComponent} from "./categoria-update/categoria-update.component";


const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
