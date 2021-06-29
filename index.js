//const rectangle = require('./rectangle');
var rect = require('./rectangle');
    // {parameter: (x,y) => (2*(x+y)),
    // area: (x,y) => (x*y)
//};


function solveRect(l,b){
    console.log("Solving for rectnagle with l = " + l + "and b = " + b);

    rect(l,b, (err, rectangle) => {

        if(err){
            console.log("ERROR : ", err.message);
        }
        else {
            console.log("area of the rectangle of dimensions l = " + l + ", and b = " + b + " is " + rectangle.area());
            console.log("parimeter of the rectangle of dimensions l = " + l + ", and b = " + b + " is " + rectangle.parimeter());

        }

    });

    console.log("This statement is after the call to rect()");

    // if(l <= 0 || b <= 0){
    //     console.log("Rectangle should be greater than zero: l = " + l + ", and b = " + b);
    // }else{
    //     console.log("area of the rectangle is " + rect.area(l,b));
    //     console.log("the paremeter of rectangle is + " + rect.parimeter(l,b));
    // }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);