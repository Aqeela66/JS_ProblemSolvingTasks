
/*
 Write a Write a forEach loop  to traverse the array
 find if ‘Cricket’ exists in the array.
  Print ‘Cricket exists’ if it is in the array. 
  Otherwise print ‘Does not exist’
*/

let games = ["volleyball", "golf", "carom_billiards", "baseball","cricket"]; //Array
//for_each loop
games.forEach(function(element){
console.log("Games Member is: " + element);
});

if (games.includes("cricket")) {

 console.log("Cricket exists!")

} else {
   console.log("Cricket does not exists!")
}





