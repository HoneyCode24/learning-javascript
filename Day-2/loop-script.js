/* print all the even number between 0-100 
for(let i=0; i<=100;i++){
    if(i%2 == 0){
        console.log(i,"is a even number");
    }
}*/

/*create a game where you start game with some random and then ask the user to guess the number and the games continues untill the user guess the correct number. 

let guess_num = 25;
user_num = prompt("enter the number :");

while(user_num != guess_num){
    if (user_num > guess_num){
        alert("guess a lower number");
    }
    else if(user_num < guess_num){
        alert("guess a higher number")
    }
    else{
        alert("Invalid input")
    }
    user_num = prompt("Guess the number again, it doesn't match")
}
alert("Congrats you have guess it correct.");*/

/* prompt the user to enter their full name. Generate a username for them based on the input start username with @, followed by their full name and ending with the fullname length*/

let user_name = prompt("Enter YOur Full name :")
let len = user_name.length 
let nospace_name = user_name.replace(" ","")
let username = ('@'.concat(nospace_name)).concat(len)
alert(`username is : ${username}`)