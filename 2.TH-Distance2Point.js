class Point {
    x;
    y;
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    displayName = "point"
    distance (otherPoint){
        return Math.hypot((this.x - otherPoint.x),(this.y - otherPoint.y))
    }
}
let A = new Point(1,2);
let B = new Point(6,2);


console.log(A.displayName);
console.log(A.distance(B));