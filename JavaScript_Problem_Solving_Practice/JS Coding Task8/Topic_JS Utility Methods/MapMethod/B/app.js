/*
Suppose you’re given an array of objects:
Use map method to print each value in a table.
*/

let usersData = [

    { name: 'Saeed', lastName: 'Ahmad', school: 'UoT', profession: 'engineer', },

    { name: 'Ali', lastName: 'Khan', school: 'TUM', profession: 'researcher', }

];
console.log(usersData);
usersData.map;

//After that use map method to make a new array from the same array by multiplying each age value by 10.

let a = usersData.map(test);
console.log(a);
function test(x) {
    return x.name + "  "+ x.lastName+"  "+ x.school+"  "+ x.profession;
};
