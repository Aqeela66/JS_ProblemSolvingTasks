/* 
JavaScript program to print the grade of person using the following conditions:

->A if percentage >85

->A- if %<=85 and >80

->B if %<=80 and >70

->C if %<=70 and >60

->D if %<=60 and >40

->E if %<=40 and also should print 'candidate failed' if %<=35
*/
function studentPercentage() {
let percentage=83;
    switch (true) {
        case (percentage > 85): //true
            alert("A Grade");
            break;
        case (percentage <= 85 && percentage > 80): 
            alert("A Grade");
            break;
        case (percentage <= 80 && percentage > 70):
            alert("B Grade");
            break;
        case (percentage <= 70 && percentage > 60):
            alert("C Grade");
            break;
        case (percentage <= 60 && percentage > 40):
            alert("D Grade");
            break;
        case (percentage <= 40 && percentage <= 35):
            alert("E Grade , candidate failed");
            break;
        default:
           alert("Enter Your Percentage")




    }
}
