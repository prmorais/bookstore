import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoriaModel} from "../model/categoria.model";
import {CategoriaService} from "../service/categoria.service";

export interface DialogData {
  message: string;
  categoria: CategoriaModel;
}

@Component({
  selector: 'app-livro-dialog',
  templateUrl: './categoria-dialog.component.html',
  styleUrls: ['./categoria-dialog.component.css']
})
export class CategoriaDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CategoriaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: CategoriaService) { }

  ngOnInit(): void {
  };

  onNoClick(): void {
    this.dialogRef.close();
  };

  delete(): void {
    const {nome, id} = this.data.categoria
    id &&
    this.service.delete(id)
      .subscribe(() => {
        this.service.message(`Categoria ${nome.toUpperCase()} removida com sucesso`);
        this.onNoClick();
      }, err => {
        this.service.message(err.error.error);
        this.onNoClick();
      });
  };
}
