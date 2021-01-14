import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowIndexService {

  showIndex: boolean = false;
  mostrarIndexEmitter = new EventEmitter<boolean>();

  constructor() { }

  mostrarIndex(resposta: boolean){
      if(resposta == true){
            this.showIndex = true;
            this.mostrarIndexEmitter.emit(true);
      }else{
            this.showIndex = false;
            this.mostrarIndexEmitter.emit(false);
      }
  }

}
