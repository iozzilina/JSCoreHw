/*
Write a JS function that returns 3 classes - Figure, Circle, Rectangle. 

Figure:
•	should be abstract (cannot be instantiated)

Circle:
•	extends Figure.
•	has a property radius
•	overrides area getter to return the area of the Circle (PI * r * r)
•	toString() - should return a string representation of the figure in the format "{type} - radius: {radius}"

Rectangle
•	extends Figure
•	has properties width and height
•	overrides area getter to return the area of the Rectangle (width * height)
•	toString() - should return a string representation of the figure in the format "{type} - width: {width}, height: {height}"

Input
There will be no input.

Output
Your function should return an object containing the Figure, Circle and Rectangle classes.

Examples
This code demonstrates how your classes should behave:
Sample Code
let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3,4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
*/

//function createClassHierarchy(){
    class Figure{
        constructor(){
            if(new.target === Figure){
                throw new TypeError('Cannot instantiate abstact classes directly');
            }
        }   

        toString(){
            let type = this.constructor.name;
            let props = Object.getOwnPropertyNames(this);
            let propsFormated = props.map(p=>`${p}: ${this[p]}`).join(', ');
            return type +' - '+ propsFormated;
        }

        get area()
            {
                    
            }    
        }

    class Circle extends Figure{
        constructor(r){
            super();
            this.radius = r;
        }

        get area(){
            return Math.PI*this.radius*this.radius;
        } 

    }

    class Rectangle extends Figure{
        constructor(width,height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.width*this.height;
        } 
       
    }

//     return{
//         Figure,
//         Circle,
//         Rectangle
//     }
// }


try{
    let f = new Figure(); 
} 
catch (er)
{
    console.log(er.message);
}

   
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3,4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4