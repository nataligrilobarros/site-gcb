import { Component, OnInit } from '@angular/core';
import { ShowIndexService } from 'src/app/services/show-index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  constructor(private showIndexService: ShowIndexService){     
  }

  ngOnInit() {
      this.showIndexService.mostrarIndex(true);
  }

}
