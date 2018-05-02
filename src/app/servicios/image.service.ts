import { Injectable } from '@angular/core';
import { Image } from "../modelos/image";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ImageService {

    //apiURL = 'http://phpstack-145370-419399.cloudwaysapps.com/naxst/web/app_dev.php/images';
    private apiURL = 'http://localhost/BACKEND/web/app_dev.php/api/';

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

  constructor(private http: HttpClient) { }

  /*getImages(){
    return this.images;
  }*/

  private getUrl(modelo: string){
    return this.apiURL + modelo;
  }

  getImages():Observable<Image[]>{
    return this.http.get<Image[]>(this.getUrl("images"));
  }

  getImage(id: String): Observable<Image>{
      return this.http.get<Image>(this.getUrl("images")+"/"+id);
  }

  addImages(image): Observable<Image>{
    return this.http.post<Image>(this.getUrl("images"), image)/*
        ._catch((error:any)=>Observable.throw(error.json().error || {message: "Error del Servidor"}))*/;
  }

  updImage(image): Observable<Image>{
    return this.http.put<Image>(this.getUrl("images")+"/"+image.id, image);
  }

  deleteImage(id: string): Observable<Image>{
    return this.http.delete<Image>(this.getUrl("images")+"/"+id);
  }

  /*getOptions(): RequestOptions{
    let auth = new Headers({ 'Authorization' : 'Bearer ' + sessionStorage.getItem('token') });
    let options = new RequestOptions({ headers: auth });

    return options;*/
}
