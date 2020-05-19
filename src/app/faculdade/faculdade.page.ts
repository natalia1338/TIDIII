import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculdade',
  templateUrl: './faculdade.page.html',
  styleUrls: ['./faculdade.page.scss'],
})
export class FaculdadePage implements OnInit {

  faculdade:any ={};
  constructor() { }

  ngOnInit() {
  }
 
  facul(){ 
    console.log("Nome_de_associado:",this.faculdade.Nome_da_instituicao);
    console.log("Cnpj:",this.faculdade.Cnpj);
    console.log("Rua:",this.faculdade.Rua);
    console.log("Numero:",this.faculdade.Numero);
    console.log("Cidade:",this.faculdade.Cidade);
    console.log("Cep:",this.faculdade.Cep);
    console.log("Estado:",this.faculdade.Estado);
    console.log("Pais:",this.faculdade.Pais);
    console.log("Contato:",this.faculdade.Contato);    
}
}
