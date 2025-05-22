/* Question-1 get a user to input a number using promt("Enter a number:"). Check if the number is a muliple of 5 or not */
num = prompt("Enter the number:");
if (num % 5 == 0) {
    alert("the number is a multiple of 5" );
}
else{
    alert("the number is not a mutliple of 5");
} 

/*Question-2  write a code which can give grades to students according to their scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F 
*/
scores = prompt("Enter your score: ");
if (scores>=90 && scores<=100){
    alert("You got grade A")
}
else if (scores>=70 && scores<=89){
    alert("You got grade : B")
}
else if (scores>=60 && scores<=69){
    alert("You got grade : C")
}
else if (scores>=50 && scores<=59){
    alert("You got grade : D")
}
else{
    alert("You got grade: F")
}