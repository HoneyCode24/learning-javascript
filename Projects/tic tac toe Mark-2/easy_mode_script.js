const btns = document.querySelectorAll(".box");
let chances = [0,1,2,3,4,5,6,7,8];
let p_score = 0;
let c_score = 0;
let gameOver = false;

const player_score = document.querySelector("#player_score");
const comp_score = document.querySelector("#comp_score");
const reset_btn = document.querySelector(".reset_btn");

// Add event listener to all boxes
btns.forEach(function(btn){
    btn.addEventListener('click', user_chance);
});

function user_chance(e){
    if (gameOver) return; // stop if game is over

    let btn = e.target;
    btn.innerText = "X";
    btn.disabled = true;

    let index = Array.from(btns).indexOf(btn);
    if (!chances.includes(index)) return;
    chances = chances.filter(item => item !== index);

    if (check_winner("X")) return;

    comp_chance(); // Only let computer play if user hasn't won
}

function comp_chance(){
    if (gameOver || chances.length === 0) return;

    let randomIndex = Math.floor(Math.random() * chances.length);
    let value = chances[randomIndex];

    btns[value].innerText = "O";
    btns[value].disabled = true;

    chances = chances.filter(item => item !== value);

    check_winner("O");
}

function check_winner(symbol){
    const win_patterns = [
        [0,1,2], [0,4,8], [3,4,5],
        [6,7,8], [0,3,6], [1,4,7],
        [2,5,8], [2,4,6]
    ];

    for(let i = 0; i < win_patterns.length; i++){
        const [a, b, c] = win_patterns[i];
        const val1 = btns[a].innerText;
        const val2 = btns[b].innerText;
        const val3 = btns[c].innerText;

        if(val1 !== "" && val1 === val2 && val2 === val3){
            gameOver = true;
            btns.forEach(btn => btn.disabled = true);

            if(symbol === "X"){
                p_score += 1;
                player_score.innerText = p_score;
            } else {
                c_score += 1;
                comp_score.innerText = c_score;
            }

            reset_btn.disabled = false;
            return true;
        }
    }

    // Check draw
    if (chances.length === 0) {
        gameOver = true;
        reset_btn.disabled = false;
    }

    return false;
}

// Reset button logic
reset_btn.addEventListener('click', () => {
    btns.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });

    chances = [0,1,2,3,4,5,6,7,8];
    gameOver = false;
});
