import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-pacemaker',
  templateUrl: './pacemaker.component.html',
  styleUrls: ['./pacemaker.component.css'],
  animations: [
    trigger('fadeIn', [

      // the "out" style determines the "resting" state of the element when it is visible.
      state('out', style({opacity: 0})),
      // in state
      state('in', style({opacity: 1})),

      transition('out => in', animate('1000ms ease-in')),
    ])
  ]
})
export class PacemakerComponent implements OnInit {

  state="out";

  constructor() { }

  ngOnInit(){
    
  }

}
