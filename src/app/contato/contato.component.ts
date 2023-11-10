import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.required,
      Validators.email
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.maxLength(300),
      Validators.required
    ]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert("A mensasgem foi enviada!");
    this.formContato.reset()
  }

}
