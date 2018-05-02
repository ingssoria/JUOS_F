import { Component, OnInit } from '@angular/core';
import { ImageService } from "../../servicios/image.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminimage-create',
  templateUrl: './adminimage-create.component.html',
  styleUrls: ['./adminimage-create.component.css']
})
export class AdminimageCreateComponent implements OnInit {

  constructor(private imgService: ImageService, private router: Router) { }

  ngOnInit() {
  }

  createImage(image){
    //console.log(image);
      this.imgService.addImages(image)
          .subscribe(
              image => {
                  console.log(image);
                  this.router.navigate(['/adminimage/images']);//para redireccionar luego de agregar imagen
              },
              error=>console.log(<any>error)
          );
  }


}
