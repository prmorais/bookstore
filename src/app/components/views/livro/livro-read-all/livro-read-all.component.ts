import { Component, OnInit } from '@angular/core';
import {LivroModel} from "../model/livro.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LivroService} from "../service/livro.service";
import {CategoriaService} from "../../categoria/service/categoria.service";

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  id_cat: string = '';
  nomeCategoria: string = '';
  load: boolean = false;
  livros: LivroModel[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'nome_autor', 'livros', 'acoes'];

  constructor(
    private service: LivroService,
    private catService: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.id_cat = params['id_cat']);
    this.findLivrosByCategoria();
    this.findNomeCategoria();
  }

  findLivrosByCategoria(): void {
    // this.id_cat &&
    this.service.findLivrosByCategoria(this.id_cat)
      .subscribe(data => {
        this.livros = data;
        this.load = true;
      }, error => console.log(error));
  };

  findNomeCategoria(): void {
    this.catService.findNomeCategoria(this.id_cat)
      .subscribe(data =>  this.nomeCategoria = data.nome, error => console.log(error));
  }

  adicionarLivro(): void {
    this.route.navigate([`categorias/${this.id_cat}/livros/create`]);
  }
}
