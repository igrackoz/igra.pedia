import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-escritura',
  templateUrl: './escritura.component.html',
  styleUrls: ['./escritura.component.css'],
  animations: [
    trigger('fade', [
      transition('void => active', [ // using status here for transition
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class EscrituraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

}
