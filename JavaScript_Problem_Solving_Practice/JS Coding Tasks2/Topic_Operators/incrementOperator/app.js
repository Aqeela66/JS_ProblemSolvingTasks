
function increment(numberOfIncrementCalls){
    numberOfIncrementCalls+=5;
    return numberOfIncrementCalls;
    }
n = document.getElementById("demo");
o = document.getElementById("event");
//p=document.getElementById("myNumber");
let numOfIncr = 5;
o.addEventListener("click",function(){
numOfIncr = increment(numOfIncr);
let insert = numOfIncr.toString();
n.innerHTML = insert;

});
//function incrOprtr(){
    //document.getElementById("myNumber").stepUp(5);

//}
