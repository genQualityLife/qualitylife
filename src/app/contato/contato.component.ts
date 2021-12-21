import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  enviar(){
    alert('Mensagem enviada com sucesso! Retornaremos no e-mail indicado.')
    this.router.navigate(['/produtos'])
  }

}
