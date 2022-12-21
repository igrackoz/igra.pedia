import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-ilustracion',
  templateUrl: './ilustracion.component.html',
  styleUrls: ['./ilustracion.component.css']
})
export class IlustracionComponent implements OnInit {

  images: string[];
  
  constructor(private storage:Storage){

    this.images = [];
  }

  ngOnInit(): void {

    this.getImages();
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
