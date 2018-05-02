import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Image} from "../../modelos/image";
import {ImageService} from "../../servicios/image.service";

@Component({
  selector: 'app-adminimage-list',
  templateUrl: './adminimage-list.component.html',
  styleUrls: ['./adminimage-list.component.css']
})
export class AdminimageListComponent implements OnInit {

  images: Observable<Image[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

}
