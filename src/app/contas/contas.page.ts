import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit {

  contadata:any ={};
  
  constructor() { }

  ngOnInit() {
  }

  contas(){
    
    
    console.log("Nome_de_associado:",this.contadata.Nome_de_associado);
    console.log("Valor:",this.contadata.Valor);
    console.log("Mes:",this.contadata.Mes);
    console.log("Status:",this.contadata.Status);
    
}

}
