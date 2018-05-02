import { Component, OnInit, Input } from '@angular/core';
import { Image } from "../modelos/image";
import { ImageService} from "../servicios/image.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

    //Para crear las imagenes sin el servicio
  /*images: Image[] = [
        new Image('1', 'Imagen 1', 'Descripcion imagen 1', 'https://videotutoriales.com/maspa/maspa1.jpg', 'https://videotutoriales.com/maspa/maspa1-1.jpg'),
        new Image('2', 'Imagen 2', 'Descripcion imagen 2', 'https://videotutoriales.com/maspa/maspa2.jpg', 'https://videotutoriales.com/maspa/maspa2-1.jpg'),
        new Image('3', 'Imagen 3', 'Descripcion imagen 3', 'https://videotutoriales.com/maspa/maspa3.jpg', 'https://videotutoriales.com/maspa/maspa3-1.jpg'),
        new Image('4', 'Imagen 4', 'Descripcion imagen 4', 'https://videotutoriales.com/maspa/maspa5.jpg', 'https://videotutoriales.com/maspa/maspa5-1.jpg'),
        new Image('5', 'Imagen 5', 'Descripcion imagen 5', 'https://videotutoriales.com/maspa/maspa4.jpg', 'https://videotutoriales.com/maspa/maspa4-1.jpg'),
        new Image('6', 'Imagen 6', 'Descripcion imagen 6', 'https://videotutoriales.com/maspa/maspa6.jpg', 'https://videotutoriales.com/maspa/maspa6-1.jpg'),
        new Image('7', 'Imagen 7', 'Descripcion imagen 7', 'https://videotutoriales.com/maspa/maspa7.jpg', 'https://videotutoriales.com/maspa/maspa7-1.jpg'),
        new Image('8', 'Imagen 8', 'Descripcion imagen 8', 'https://videotutoriales.com/maspa/maspa8.jpg', 'https://videotutoriales.com/maspa/maspa8-1.jpg')
      ];*/

  //images: Image[]; antes
  images: Observable<Image[]>;
  selectedImage: Image;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
      this.images = this.imageService.getImages();
  }

  onSelect(image: Image){
    this.selectedImage = image;
    return false;
  }

}
