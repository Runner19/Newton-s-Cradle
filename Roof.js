class Roof{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 300;
        this.height = 40;
    }

    display(){
        rect(this.x, this.y, this.width, this.height);
    }
}