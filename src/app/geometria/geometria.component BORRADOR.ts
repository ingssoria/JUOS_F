import { Component, OnInit } from '@angular/core';

import {Figura} from "../modelos/figura.modelo";
import {Circulo} from "../modelos/circulo.modelo";

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.component.html',
  styleUrls: ['./geometria.component.css']
})
export /*abstract */class GeometriaComponent implements OnInit {

    /*static cantfiguras: number = 0;*/
    private x: number;
    private y: number;
    private radio: number;

    figura: Circulo;

  constructor(/*x,y*/) {
      /*if(x && y){
          this.x = x;
          this.y = y;
      }*/
  }

  /*getcoorX(){
      return this.x;
  }

  getcoorY(){
      return this.y;
  }*/

  ngOnInit() {
  }

  agregarFigura(){
      this.figura = new Circulo(this.x, this.y, this.radio);

      console.log(this.figura);
      console.log(this.figura.getListaCirculos());
  }

  getListaFiguras(){
      return this.figura.getListaCirculos();
  }
  /*abstract area();
  abstract perimetro();*/


}

/*@Component({
    selector: 'app-circulo',
    templateUrl: './geometria.component.html',
    styleUrls: ['./geometria.component.css']
})
export class CirculoComponent extends GeometriaComponent {

    static PI: any = 3.14;
    private radio: number;
    public listaCirculos: Array<CirculoComponent>;
    public lista: Array<string>;*/

/*    constructor(x, y) {
      super(x, y);
      this.listaCirculos = [];
    this.lista=["algo"];
    }

    ngOnInit() {
    }

    area(){
        var area: any = CirculoComponent.PI*( this.radio * this.radio );
        return area;
    }

    perimetro(){
        var perimetro: any = CirculoComponent.PI*this.radio;
        return perimetro;
    }

    getRadio(){
        return this.radio;
    }

    getCentro(){
        var centro: string = "(" + this.getcoorX() + "," + this.getcoorY() + ")";
        return centro;
    }

    getListaCirculos(): any{
        var listaC = this.listaCirculos;
        return listaC;
    }

    agregarFigura(x, y){
        //if(this.getcoorX() && this.getcoorY() && this.radio){
        CirculoComponent.cantfiguras++;
        var figura = new CirculoComponent(x, y);
        figura.getListaCirculos().push(figura);

        //}

        console.log(this.getcoorX() + " " + this.getcoorY() + " " + CirculoComponent.cantfiguras);
        console.log(this.listaCirculos);
    }

    probar(){
        this.lista.push(this.radio.toString());
    }

}*/
