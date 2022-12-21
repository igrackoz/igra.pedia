import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  locacion:string='';
  direccion:String='';

  constructor(private location: Location) { }

  
  ngOnInit(): void {
    
    let direccion = new URL(window.location.href);

    if (direccion.pathname === '/inicio') {
        
      this.locacion = 'inicio';
    }

    if (direccion.pathname === '/ilustraciones') {
        
      this.locacion = 'ilustraciones';
    }

    if (direccion.pathname === '/escritura') {
        
      this.locacion = 'escritura';
    }

    if (direccion.pathname === '/modelado') {
        
      this.locacion = 'modelado';
    }
  }

  inicioActive(){

    this.locacion = 'inicio';
    this.location.replaceState("inicio");
  }

  historiaActive(){

    this.locacion = 'ilustraciones';
    this.location.replaceState("ilustraciones");
  }

  personajesActive(){

    this.locacion = 'escritura';
    this.location.replaceState("escritura");
  }

  poderActive(){

    this.locacion = 'modelado';
    this.location.replaceState("modelado");
  }


}
