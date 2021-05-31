/* 
define a add function
1.Create 3 varaibles a b c, a and b are two variables at the time of browsing.
2.In line 11 we add a and b and put in the other variable c.
3.In line13 we get the output of c
4. In html file just call the add() function so it will declare the output of two numers
*/

function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=a + b;
    document.getElementById("answer").value= c;
}