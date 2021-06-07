/*
Make an object. Name it as cities. 
Now give it keys as ‘first’,’ second’,’ third’,’ fourth’. 
Put ‘Karachi’, ‘Lahore’, ‘Islamabad’, ‘Quetta’ as keys.
Loop values of object’s properties by using for...in loop and print them.
*/

let cities = {
    first: "Karachi",
    second: "Lahore",
    third: "Islamabad",
    fourth: "Quetta"
};

console.log(cities);
let x;
for (x in cities) {
    console.log(cities[x]);

}
