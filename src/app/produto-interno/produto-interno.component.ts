import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produto-interno',
  templateUrl: './produto-interno.component.html',
  styleUrls: ['./produto-interno.component.css']
})
export class ProdutoInternoComponent implements OnInit {

  produto: Produto = new Produto()
  qtd: number = 0

  constructor(
    private alertas: AlertasService,
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutosService

    ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.alertas.showAlertInfo(
        'Você precisa estar logado para realizar essa compra!'
      );
      this.router.navigate(['/login']);
    }

    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }

  menos() {
    this.qtd = this.qtd - 1
  }

  mais(){
    this.qtd = this.qtd + 1
  }

  comprar(){
    this.alertas.showAlertSuccess('Você comprou ' + this.qtd + ' unidades de ' + this.produto.nome)
    this.router.navigate(['/produtos'])
  }

}
