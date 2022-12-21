import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  seccion:string='';

  constructor(){

  }

  ngOnInit() {
    
    let direccion = new URL(window.location.href);

    if (direccion.pathname === '/escritura/pacemaker') {
        
      this.seccion = 'resumen';
    }
  }
}
