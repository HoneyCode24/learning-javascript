let user_score = document.querySelector(".user-score");
let user_score_num = 0
let comp_score = document.querySelector(".comp-score");
let comp_score_num = 0

function gamelogic(user_choice){
    // getting the computer choice 
    let choices = ['rock','paper','scissor'];
    let indx = Math.floor(Math.random()*3);
    let comp_choice = choices[indx];
    let para = document.querySelector('.message')
    if( user_choice === comp_choice){
        para.textContent = "Game is draw, Try again.";
        para.style.backgroundColor = ""
    }
    else if(user_choice== 'rock'){
        if(comp_choice == 'paper'){
            para.textContent = 'You lose.'
            para.style.backgroundColor = "red"
            comp_score_num++
            comp_score.textContent = comp_score_num
        }
        else{
            para.textContent = 'You Win.'
            para.style.backgroundColor="green"
            user_score_num++
            user_score.textContent = user_score_num
        }
    }
    else if(user_choice== 'paper'){
        if(comp_choice == 'rock'){
            para.textContent = 'You Win.'
            para.style.backgroundColor = "green"
            user_score_num++
            user_score.textContent = user_score_num
        }
        else{
            para.textContent = 'You Lose.'
            para.style.backgroundColor = "red"
            comp_score_num++
            comp_score.textContent = comp_score_num
        }
    }
    else if(user_choice== 'scissor'){
        if(comp_choice == 'paper'){
            para.textContent = 'You Win.'
            para.style.backgroundColor = "green"
            user_score_num++
            user_score.textContent = user_score_num
        }
        else{
            para.textContent = 'You Lose.'
            para.style.backgroundColor = "red"
            comp_score_num++
            comp_score.textContent = comp_score_num
        }
    }
    else{
        para.textContent = 'Invalid input'
    }
}


let user_choice;
document.querySelector("#rock").addEventListener("click", ()=>{
    user_choice = 'rock';
    gamelogic(user_choice);
});
document.querySelector("#paper").addEventListener("click", ()=>{
    user_choice = 'paper';
    gamelogic(user_choice);
});
document.querySelector("#scissor").addEventListener("click", ()=>{
    user_choice = 'scissor';
    gamelogic(user_choice);
});