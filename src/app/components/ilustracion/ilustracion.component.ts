import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {trigger, style, animate, transition, state } from '@angular/animations';


@Component({
  selector: 'app-ilustracion',
  templateUrl: './ilustracion.component.html',
  styleUrls: ['./ilustracion.component.css'],
  animations: [
    trigger('appear', [

      state('no', style({
        opacity: '0',
      })),
      state('si', style({
        opacity: '1',
      })),
      transition('closed => open', [
        animate('0.5s cubic-bezier(.16,.67,.21,.97)')
      ]),
      transition('open => closed', [
        animate('0.5s cubic-bezier(.16,.67,.21,.97)')
      ]),
    ])
  ]

})
export class IlustracionComponent implements OnInit {

  images: string[];
  
  constructor(private storage:Storage){

    this.images = [];
  }

  ngOnInit(): void {

    this.getImages();
  }

  public aparicion = true;

  toggle() {
    this.aparicion = !this.aparicion;
  }

  getImages(){

    const imgRef = ref(this.storage, 'ilustraciones');

    listAll(imgRef)
      .then(async response => {
      console.log(response);
      for (let item of response.items){
        const url = await getDownloadURL(item);
        this.images.push(url);
      } 

    }).catch(error  => console.log(error));
  }

}
