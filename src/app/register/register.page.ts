import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  cadastrodata:any ={};

  ngOnInit() {
  }

  Cadastro(){
    
    
    console.log("CPF:",this.cadastrodata.CPF);
    console.log("RG:",this.cadastrodata.RG);
    console.log("Telefone:",this.cadastrodata.Telefone);
    console.log("Nome_da_mae:",this.cadastrodata.Nome_da_mae);
    console.log("Nome_do_pai:",this.cadastrodata.Nome_do_pai);
    console.log("CEP",this.cadastrodata.CEP);
    console.log("Rua",this.cadastrodata.Rua);
    console.log("numero",this.cadastrodata.numero);
    console.log("Cidade",this.cadastrodata.Cidade);
    console.log("Estado",this.cadastrodata.Estado);
    console.log("Pais",this.cadastrodata.Pais);
    console.log("Nome_completo",this.cadastrodata.Nome_completo);
    console.log("Data_de_nascimento",this.cadastrodata.Data_de_nascimento);
    console.log("Email:",this.cadastrodata.Email);
    console.log("Senha:",this.cadastrodata.Senha);
    console.log("c_senha",this.cadastrodata.c_senha);
}

}
