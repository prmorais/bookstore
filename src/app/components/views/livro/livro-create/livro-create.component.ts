import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LivroModel} from "../livro.model";
import {LivroService} from "../livro.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {validaCampos, validaCampoTouched} from "../utils";

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: LivroModel = {
    titulo: '',
    nome_autor: '',
    texto: '',
  }

  id_cat: string = '';
  formulario: FormGroup = new FormGroup({});

  constructor(
    private service: LivroService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.id_cat = this.activatedRoute.snapshot.params.id_cat;
    this.criarFormulario();
  };

  criarFormulario() {
    this.formulario = this.fb.group({
      titulo: [null, [Validators.required, Validators.minLength(5)]],
      nome_autor: [null, [Validators.required, Validators.minLength(5)]],
      texto: [null, [Validators.required, Validators.minLength(10)]],
    });
  }

  create(): void {
    this.service.create(this.id_cat, this.formulario.value)
      .subscribe(data => {
        this.livro = data;
        this.service.message(`Livro ${this.livro.titulo.toUpperCase()} adicionado com sucesso`);
        this.cancel();
      }, err => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.message(err.error.errors[i].message);
        }
      });
  };

  cancel(): void {
    this.route.navigate([`categorias/${this.id_cat}/livros`]);
  };

  // Métodos para a validação dos campos do formulário
  verificaValidTouched(campo: string) {
    return validaCampoTouched(campo, this.formulario);
  };

  getMessage(campo: string): string {
    return validaCampos(campo, this.formulario);
  }
}
