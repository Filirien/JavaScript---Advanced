class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea(){
        return this.width * this.height;   }
}

let myRect = new Rectangle(4,5,'red');
console.log(myRect.width);
console.log(myRect.height);
console.log(myRect.color);
console.log(myRect.calcArea());

