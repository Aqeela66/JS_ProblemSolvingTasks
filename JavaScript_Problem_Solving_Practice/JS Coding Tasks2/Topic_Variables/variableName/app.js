//using let
function first() {
    let a = 10;
   console.log(a);
}
function second() {
    let a = 10;
    console.log(a);
}
first();
second();

//using var

function firstPart(){
    var b=20;
    console.log(b);
}
function secondPart(){
    var b=30;
    console.log(b);
}
firstPart();
secondPart();

//using global variable
 
c="The Global Variable";
function globalFun(){
    console.log(c);
}
globalFun();

