import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ImageService} from "../../servicios/image.service";
import {Image} from "../../modelos/image";

@Component({
  selector: 'app-adminimage-delete',
  templateUrl: './adminimage-delete.component.html',
  styleUrls: ['./adminimage-delete.component.css']
})
export class AdminimageDeleteComponent implements OnInit, OnDestroy {

  id: any;
  params: any;

  //@Input() img : Image;
  image = new Image('','','','','');

  constructor(private activedRoute: ActivatedRoute, private imgService: ImageService, private router: Router) { }

  ngOnInit() {
    this.params = this.activedRoute.params.subscribe(params => this.id = params['id']);
    this.imgService.getImage(this.id).subscribe(
      data => {
        this.image.titulo = data['titulo'];
        this.image.thumbnail = data['thumbnail'];
      },
      error => console.log(<any>error)
    );
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }

  deleteImage(id){
    this.imgService.deleteImage(id)
        .subscribe(
            id =>{
                console.log(id);
                this.router.navigate(['/adminimage/images']);
            },
            error => console.log(<any> error)
        );
  }

}
