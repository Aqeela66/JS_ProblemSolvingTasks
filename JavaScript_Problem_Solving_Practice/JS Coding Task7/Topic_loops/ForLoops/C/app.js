
/*
  Write a for..of loop   to traverse the array
 find if ‘Cricket’ exists in the array.
  Print ‘Cricket exists’ if it is in the array. 
  Otherwise print ‘Does not exist’
*/

let games = ["volleyball", "golf", "carom_billiards", "baseball","cricket"]; //Array
//forOf loop 
for(let x of games){
   console.log("Games Members are: " + games);
   };
if (games.includes("cricket")) {

 console.log("Cricket exists!")

} else {
   console.log("Cricket does not exists!")
}





