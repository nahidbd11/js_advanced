
/****
 *  todo:prototype
 * 
let protoObj={
    name:"nahid",
    age:25,
    __proto__:{
        name:"jahid"
    },
}

let inheritObj=Object.create(protoObj);



// console.log(Object.getPrototypeOf(inheritObj));
// console.log(Object.getPrototypeOf(protoObj));
// console.log(protoObj.prototype);


function Vehicle(name,model){
    this.name=name;
    this.model=model;

}

Vehicle.prototype={
    "speed":200
};

let car=new Vehicle("volvo",'M2');
// console.log(car.__proto__);


function FlyingVehicle(name,model,altitude){
    Vehicle.call(this,name,model);
    this.altitude=altitude;

}

Object.setPrototypeOf(FlyingVehicle.prototype,Vehicle.prototype);


const flyVehicle=new FlyingVehicle("plane","p1","2000");


console.log(Object.getPrototypeOf(flyVehicle));

**/

/**
 * ?test
 *
  const num=5;


function multiplyTwo(num){

    num*=2;
    console.log(num);
}

multiplyTwo(num);

console.log(num);
 * 
 * 
 */



/*********
 * todo:Symbol()
 * 



let sym1=Symbol("id");
let sym2=Symbol("id");
console.log(sym1===sym2);

let username=Symbol('name');
let age=Symbol('age');


let user={
      [username]:"nahid",
      [age]:28
}

user[username]="jahid";


console.log(user[username]);


let globalSymbol1=Symbol.for("global1");
let globalSymbol2=Symbol.for("global1");

console.log(globalSymbol1===globalSymbol2);
console.log(Symbol.keyFor(globalSymbol1));


 **/


/******
 * 
 * todo:Generator function
 * 
 */


function* testGenerator(){

  yield;
  yield;

}


const tst=testGenerator();

console.log(tst.next(1));
console.log(tst.next(2));





function* logGenerator() {

yield '1';
yield;
yield;
}

const logGen = logGenerator();

// logGen.next();
// logGen.next(4);
// logGen.next(3);

console.log(logGen.next());
console.log(logGen.next(2));








