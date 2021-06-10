let element;
element = document.getElementsByClassName("div_class");
console.log(element);
element1 = document.getElementsByClassName("div_class")[0]
console.log(element1);
element2 = document.getElementsByClassName("div_class")[0].getAttribute("style");
console.log(element2);
element3 = document.querySelector(".div_class").style.color = "red";
console.log(element3);
element4 = document.querySelector(".div_class").style.border = "5px solid blue";
console.log(element4);
element5 = document.getElementsByClassName("div_class")[0].attributes[1].value = "color:red; border: 4px solid blue";
console.log(element5);

