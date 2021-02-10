import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LivroService} from "../service/livro.service";
import {LivroModel} from "../model/livro.model";

export interface DialogData {
  id_cat: string;
  id_livro: string;
}

@Component({
  selector: 'app-livro-dialog',
  templateUrl: './livro-dialog.component.html',
  styleUrls: ['./livro-dialog.component.css']
})
export class LivroDialogComponent implements OnInit {
  livro: LivroModel = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: '',
  };

  id_cat: string = '';

  constructor(
    public dialogRef: MatDialogRef<LivroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: LivroService) { }

  ngOnInit(): void {
    this.findLivroById();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  findLivroById(): void {
    this.service.findLivroById(this.data.id_livro)
      .subscribe(data => {
        this.livro = data;
      });
  };

  delete(): void {
    this.service.delete(this.data.id_livro)
      .subscribe(() => {
        this.onNoClick();
        this.service.message(`Livro ${this.livro.titulo.toUpperCase()} removido com sucesso`);
      }, () => {
        this.service.message('Ocorreu um erro ao remover livro. Tente mais tarde.');
      });
  };
}
