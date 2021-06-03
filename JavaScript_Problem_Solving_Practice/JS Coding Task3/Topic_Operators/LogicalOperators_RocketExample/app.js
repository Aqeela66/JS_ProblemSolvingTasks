/* Rocket can launch if 
1. 3 variables. IsSnow, IsRain, IsSpeed.
2.values to them true  or false
3.there are conditions that there should be no rain, no snow and the speed of wind should be less than 20km/hr.
*/
function launchRocket(){
let isRain = false;
let isSnow = false;
let isSpeed = 19;
let canLaunch = (isRain === false) && (isSnow === false) && (isSpeed < 20);
alert(canLaunch);
}