import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {ShareModule} from "../../../share/share.module";

import {LivroReadAllComponent} from "./livro-read-all/livro-read-all.component";
import {LivroCreateComponent} from "./livro-create/livro-create.component";
import {LivroUpdateComponent} from "./livro-update/livro-update.component";
import {LivroDeleteComponent} from "./livro-delete/livro-delete.component";
import {LivroReadComponent} from "./livro-read/livro-read.component";
import {LivroRoutingModule} from "./livro-routing.module";

@NgModule({
  declarations: [
    LivroReadAllComponent,
    LivroCreateComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    LivroReadComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LivroRoutingModule,
    ShareModule
  ]
})
export class LivroModule { }
