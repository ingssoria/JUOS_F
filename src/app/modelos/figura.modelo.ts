export abstract class Figura {
    static cantfiguras: number = 0;
    private x: number;
    private y: number;

    constructor(x: number = 0, y: number = 0){
        this.x = x;
        this.y = y;
        Figura.cantfiguras++;
    }

    public getpX(){
        return this.x;
    }

    public getpY(){
        return this.y;
    }

    abstract area();
    abstract perimetro();
}
