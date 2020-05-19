import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.page.html',
  styleUrls: ['./fornecedor.page.scss'],
})
export class FornecedorPage implements OnInit {
  fornecedor:any ={};
  constructor() { }

  ngOnInit() {
  }
 
  forne(){ 
    console.log("Nome_fornecedor:",this.fornecedor.Nome_fornecedor);
    console.log("Cnpj:",this.fornecedor.Cnpj);
    console.log("Rua:",this.fornecedor.Rua);
    console.log("Numero:",this.fornecedor.Numero);
    console.log("Cidade:",this.fornecedor.Cidade);
    console.log("Cep:",this.fornecedor.Cep);
    console.log("Estado:",this.fornecedor.Estado);
    console.log("Pais:",this.fornecedor.Pais);
    console.log("Contato:",this.fornecedor.Contato);    
}
}

