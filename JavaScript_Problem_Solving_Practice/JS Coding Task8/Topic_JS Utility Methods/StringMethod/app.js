/*
Use .length property to print length of a string cityName = ‘Tokyo’
Find the index of ‘o’ character in the given string using indexOf method
Use search method to locate ‘o’ in the given string and notice the difference between indexOf and search methods
*/


let cityName = "Tokyo";
let a = cityName.length;
console.log(a);
let b = cityName.indexOf("o");
console.log(b);
let c = cityName.search("o");
console.log(c);

/*The search function (one description here) takes a regular expression,
which allows you to match against more sophisticated patters,
case-insensitive strings, etc.,
while indexOf (one description here) simply matches a literal string.
However, indexOf also allows you to specify a beginning index.*/