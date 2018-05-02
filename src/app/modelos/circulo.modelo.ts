import {Figura} from "./figura.modelo";

export class Circulo extends Figura{

    static PI: any = 3.14;
    private radio: number;
    static listaCirculos = [];

    constructor(x: number = 0, y: number = 0, radio: number= 1){
        super(x,y);
        this.radio = radio;
        Circulo.listaCirculos.push(this);
    }

    getCentro(){
        var centro: string = "(" + this.getpX() + "," + this.getpY() + ")";
        return centro;
    }

    getRadio(){
        return this.radio;
    }

    getListaCirculos(){
        return Circulo.listaCirculos;
    }

    area(){
        var area : any = Circulo.PI*(this.radio*this.radio);
        return area;
    }

    perimetro(){
        var perimetro : any = Circulo.PI*this.radio;
        return perimetro;
    }
}
