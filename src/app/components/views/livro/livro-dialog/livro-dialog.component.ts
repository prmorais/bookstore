import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LivroService} from "../service/livro.service";
import {LivroModel} from "../model/livro.model";

export interface DialogData {
  message: string;
  livro: LivroModel;
}

@Component({
  selector: 'app-livro-dialog',
  templateUrl: './livro-dialog.component.html',
  styleUrls: ['./livro-dialog.component.css']
})
export class LivroDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LivroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: LivroService) { }

  ngOnInit(): void {
  };

  onNoClick(): void {
    this.dialogRef.close();
  };

  delete(): void {
    const {id, titulo} = this.data.livro
    id &&
    this.service.delete(id)
      .subscribe(() => {
        this.service.message(`Livro ${titulo.toUpperCase()} removido com sucesso`);
        this.onNoClick();
      }, () => {
        this.service.message('Ocorreu um erro ao remover livro. Tente mais tarde.');
        this.onNoClick();
      });
  };
}
