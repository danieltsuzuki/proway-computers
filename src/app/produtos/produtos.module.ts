import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { FormsModule } from '@angular/forms';
import { DescricaoLengthPipe } from '../descricao-length.pipe';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalheProdutoComponent,
    DescricaoLengthPipe
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
