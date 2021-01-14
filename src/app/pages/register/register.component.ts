import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/model/address.model';
import { AddressService } from 'src/app/services/address.service';
import { ShowIndexService } from 'src/app/services/show-index.service';
//import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   mensagemAlerta: string = "";
   dataNascimento: Date;
   nome: string;
   cpf: string;
   cep: string;
   address : AddressModel = new AddressModel();

  constructor(private showIndexService: ShowIndexService, private addressService: AddressService){     
  }

  ngOnInit() {
      this.showIndexService.mostrarIndex(false);
  }

  searchAdress(){
    this.addressService.buscarEnderecoPeloCep(this.cep).subscribe(resposta => {
      this.address = resposta;
      console.log(resposta);
      console.log(this.address);           
    });    
  }

  nomeObrigatorio(){
    if(this.nome == "" || this.nome == null){
      this.mensagemAlerta = "nome obrigatorio"
    }else {
      this.mensagemAlerta = null;
    }
  }
  
  cadastrar(){

    this.mensagemAlerta = "";

    if(this.nome == "" || this.nome == null){
      this.mensagemAlerta = "Nome está vazio";
      return false;
    }

    if(this.dataNascimento == null){
      this.mensagemAlerta = "Data de Nascimento está vazio";
      return false;
    }
    if(this.cpf == null){
      this.mensagemAlerta = "CPF está vazio";
      return false;
    }

    if(isNaN(+this.cpf)){
      this.mensagemAlerta = "CPF não é um número!";
      return false;
    }
    if(this.cep == "" || this.cep == null){
      this.mensagemAlerta = "CEP está vazio";
      return false;
    }
    if(isNaN(+this.cep)){
      this.mensagemAlerta = "CEP não é um número!";
      return false;
    }
  
  }


  
}
