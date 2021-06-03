//Logical Operator
function logicalOp() {
    let a1 = true && true; // ture and ture is ture
    alert(a1);
}
function logicalOp1() {
    var a2 = false && true; // f && t returns false
    alert(a2);
}
function logicalOp2() {
    let a3 = false && false; // f && f returns false
    alert(a3);
}
function logicalOp3() {
    let a4 = false || true;  // f || t returns true
    alert(a4);
}
function logicalOp4() {
    let a5 = (5>4 && 2<5); //ture and ture is ture
    alert(a5);
}
function logicalOp5() {
    let a5 = (2==9 || 2==2);// false true is true
    alert(a5);
}
function logicalOp6() {
    let a6 = !(!(4>2)); // 4 is greater than 2 but ! make false !  make true
    alert(a6);
}

