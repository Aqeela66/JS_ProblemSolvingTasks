let element;
element = document.getElementsByClassName("div_class")[0];
console.log(element);
element2 = document.getElementsByClassName("div_class")[0].getAttribute("style");
console.log(element2);
element3 = document.getElementsByClassName("div_class")[0].attributes[1].value = "color:red;border:4px solid blue"
console.log(element3);
element1 = document.getElementsByClassName("div_class")[0] = "changed_class";
console.log(element1);
