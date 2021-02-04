import { Component, OnInit } from '@angular/core';
import {LivroModel} from "../livro.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LivroService} from "../livro.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  livro: LivroModel = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: '',
  };

  id_cat: string = '';
  load: boolean = false;

  constructor(
    private service: LivroService,
    private route: Router,
    private activatedRoute: ActivatedRoute) {
  };

  ngOnInit(): void {
    this.id_cat = this.activatedRoute.snapshot.params.id_cat;
    this.livro.id = this.activatedRoute.snapshot.params.id;
    this.findLivroById();
  }

  findLivroById(): void {
    this.livro.id &&
    this.service.findLivroById(this.livro.id)
      .subscribe(data => {
        this.livro = data;
        this.load = true;
      });
  };

  cancel(): void {
    this.route.navigate([`categorias/${this.id_cat}/livros`]);
  };
}
