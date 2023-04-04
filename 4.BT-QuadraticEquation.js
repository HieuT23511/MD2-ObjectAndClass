class QuadraticEquation {
    a;
    b;
    c;

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // getterA() {
    //     return this.a;
    // }
    //
    // getterB() {
    //     return this.b;
    // }
    //
    // getterC() {
    //     return this.c;
    // }

    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }
    getRoot1(){
       return (-this.b+Math.pow((this.getDiscriminant()),0.5))/(2*this.a);
    }
    getRoot2(){
        return (-this.b-Math.pow((this.getDiscriminant()),0.5))/(2*this.a);
    }
}
function calculate (equation){
    if(equation.getDiscriminant()>0) {
         return console.log(`This Equation have 2 roots: ${equation.getRoot1()} and ${equation.getRoot2()}`)
    } else if (equation.getDiscriminant()===0){
        return console.log(`This Equation have 2 equal roots: ${equation.getRoot1()} `)
    } else {
        return console.log(`The equation has no roots`)
    }
}
let equation1 = new QuadraticEquation(1,3,1);
let equation2 = new QuadraticEquation(1,2,1);
let equation3 = new QuadraticEquation(1,2,3);
calculate(equation1);
calculate(equation2);
calculate(equation3);

