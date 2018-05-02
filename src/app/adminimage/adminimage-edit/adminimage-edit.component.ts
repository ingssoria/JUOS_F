import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ImageService } from "../../servicios/image.service";
import { Image } from "../../modelos/image";

@Component({
  selector: 'app-adminimage-edit',
  templateUrl: './adminimage-edit.component.html',
  styleUrls: ['./adminimage-edit.component.css']
})
export class AdminimageEditComponent implements OnInit, OnDestroy {

  id: any;
  params: any;

  image = new Image('','','','','');

  constructor(private activedRoute: ActivatedRoute, private imgService: ImageService, private router: Router) { }

  ngOnInit() {
    this.params = this.activedRoute.params.subscribe(params => this.id = params['id']);
    this.imgService.getImage(this.id).subscribe(
        data => {
          //console.log(data);
          this.image.id = data['id'];
          this.image.titulo = data['titulo'];
          this.image.descripcion = data['descripcion'];
          this.image.thumbnail = data['thumbnail'];
          this.image.img_link = data['img_link'];
        },
        error => console.log(<any>error)
    );
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }

  updateImage(image){
    this.imgService.updImage(this.image)
        .subscribe(
            data =>{
              console.log(image);
              this.router.navigate(['/adminimage/images'])
            },
            error => console.log(<any>error)
        );
  }
}
