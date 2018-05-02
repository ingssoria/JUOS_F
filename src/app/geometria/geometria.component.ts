import { Component, OnInit } from '@angular/core';

import {Circulo} from "../modelos/circulo.modelo";

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.component.html',
  styleUrls: ['./geometria.component.css']
})
export class GeometriaComponent implements OnInit {

    private x: number;
    private y: number;
    private radio: number;
    figura: Circulo;



  constructor() { }

  ngOnInit() {
  }

  agregarFigura(){
      this.figura = new Circulo(this.x, this.y, this.radio);


      console.log(this.figura);
      console.log(this.figura.getListaCirculos());
  }

}