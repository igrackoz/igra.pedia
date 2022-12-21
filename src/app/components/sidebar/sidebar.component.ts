import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, state } from '@angular/animations';
import {Location} from '@angular/common'; 

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

  seccion:string='';
  direccion:String='';

  constructor(private location: Location) { }

  
  ngOnInit(): void {
    
    let direccion = new URL(window.location.href);

    if (direccion.pathname === '/escritura/pacemaker') {
        
      this.seccion = 'resumen';
    }

    if (direccion.pathname === '/escritura/pacemaker/historia') {
        
      this.seccion = 'historia';
    }

    if (direccion.pathname === '/escritura/pacemaker/personajes') {
        
      this.seccion = 'personajes';
    }

    if (direccion.pathname === '/escritura/pacemaker/sistema-de-poder-nearth') {
        
      this.seccion = 'poder';
    }
  }

  public isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  isOpen2 = true;

  toggle2() {
    this.isOpen2 = !this.isOpen2;
  }

  resumenActive(){

    this.seccion = 'resumen';
    this.location.replaceState("escritura/pacemaker");
  }

  historiaActive(){

    this.seccion = 'historia';
    this.location.replaceState("escritura/pacemaker/historia");
  }

  personajesActive(){

    this.seccion = 'personajes';
    this.location.replaceState("escritura/pacemaker/personajes");
  }

  poderActive(){

    this.seccion = 'poder';
    this.location.replaceState("escritura/pacemaker/sistema-de-poder-nearth");
  }

}
