import {Component, OnInit} from '@angular/core';
import {CategoriaModel} from "../model/categoria.model";
import {CategoriaService} from "../service/categoria.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CategoriaDialogComponent} from "../categoria-dialog/categoria-dialog.component";

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
  categorias: CategoriaModel[] = [];
  load: boolean = false;

  constructor(
    private service: CategoriaService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  };

  findAll() {
    this.service.findAllCategorias()
      .subscribe((data => {
        this.categorias = data;
        this.load = true;
      }))
  };

  novaCategoria() {
    this.router.navigate(['categorias/create']).then();
  };

  openDialog(categoria: CategoriaModel): void {
    const dialogRef = this.dialog.open(CategoriaDialogComponent, {
      width: '450px',
      data: {
        categoria,
        message: `Deseja remover a Categoria ${categoria.nome.toUpperCase()}?`
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.findAll();
    });
  };
}
