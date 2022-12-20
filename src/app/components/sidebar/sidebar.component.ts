import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('nav-extension', [

      state('closed', style({
        width: '70px',
      })),
      state('open', style({
        width: '350px',
      })),
      transition('closed => open', [
        animate('0.4s cubic-bezier(.16,.67,.21,.97)')
      ]),
      transition('open => closed', [
        animate('0.4s cubic-bezier(.16,.67,.21,.97)')
      ]),
    ]),
    trigger('slide', [

      state('abierto', style({
        transform: 'translateX(-210px)',
      })),
      state('cerrado', style({
        transform: 'translateX(70px)',
      })),
      transition('abierto => cerrado', [
        animate('0.4s cubic-bezier(.16,.67,.21,.97)')
      ]),
      transition('cerrado => abierto', [
        animate('0.4s cubic-bezier(.16,.67,.21,.97)')
      ]),
    ]),
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  isOpen2 = true;

  toggle2() {
    this.isOpen2 = !this.isOpen2;
  }

}
