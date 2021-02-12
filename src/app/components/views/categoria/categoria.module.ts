import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {CategoriaRoutingModule} from "./categoria-routing.module";
import {ShareModule} from "../../../share/share.module";

import {CategoriaReadComponent} from "./categoria-read/categoria-read.component";
import {CategoriaCreateComponent} from "./categoria-create/categoria-create.component";
import {CategoriaDeleteComponent} from "./categoria-delete/categoria-delete.component";
import {CategoriaUpdateComponent} from "./categoria-update/categoria-update.component";
import {CategoriaDialogComponent} from "./categoria-dialog/categoria-dialog.component";

@NgModule({
  declarations: [
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    CategoriaDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriaRoutingModule,
    ShareModule,
  ]
})
export class CategoriaModule { }
