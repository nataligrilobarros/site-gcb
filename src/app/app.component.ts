import { Component } from '@angular/core';
import { EventEmitter } from 'events';
import { ShowIndexService } from './services/show-index.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    showIndex: boolean;

    constructor(private showIndexService: ShowIndexService){     
    }

    ngOnInit() {
      this.showIndexService.mostrarIndexEmitter.subscribe(resp => {
        this.showIndex =  resp;
      });
    }

}
