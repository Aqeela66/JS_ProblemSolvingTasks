
/*
 Write a for loop to traverse the array
 find if ‘Cricket’ exists in the array.
  Print ‘Cricket exists’ if it is in the array. 
  Otherwise print ‘Does not exist’
*/

let games = ["volleyball", "golf", "carom_billiards", "baseball", "cricket"]; //Array
console.log(games);

for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
}

if (games.includes("cricket")) {

    console.log("Cricket exists!")

} else {
    console.log("Cricket does not exists!")
}





