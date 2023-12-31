import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens =  JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produtoCarrinho: IProdutoCarrinho){
    this.itens.push(produtoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter( item => item.id !== produtoId );
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

}