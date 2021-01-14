import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string = "Opaaaa";
 // @Input() id: string = "";
  //@Input() nome: string = "";

  constructor() { }

  ngOnInit() {
  }

}
