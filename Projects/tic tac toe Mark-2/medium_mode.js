const btns = document.querySelectorAll(".box");
const win_patterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]            // Diagonals
];

let chances = [0,1,2,3,4,5,6,7,8];
let gameOver = false;
let p_score = 0;
let c_score = 0;
let d_score = 0;
const player_score = document.querySelector("#player_score");
const comp_score = document.querySelector("#comp_score");
const reset_btn = document.querySelector(".reset_btn");
const draw = document.querySelector("#draw");

btns.forEach(btn => btn.addEventListener("click", player_chance));

function player_chance(e) {
  if (gameOver) return;

  const btn = e.target;
  const index = Array.from(btns).indexOf(btn);

  if (!chances.includes(index)) return;

  btn.innerText = "X";
  btn.disabled = true;
  chances = chances.filter(item => item !== index);

  checkWinner("X")
  comp_chance();
}

function comp_chance() {
  if (gameOver || chances.length === 0) return;

  // 1. Check if AI can win
  for (let pattern of win_patterns) {
    let [a, b, c] = pattern;
    let values = [btns[a].innerText, btns[b].innerText, btns[c].innerText];
    let oCount = values.filter(v => v === "O").length;
    let emptyIndex = pattern[values.indexOf("")];

    if (oCount === 2 && values.includes("")) {
      playMove(emptyIndex, "O");
      checkWinner("O")
      return;
    }
  }

  // 2. Block the player
  for (let pattern of win_patterns) {
    let [a, b, c] = pattern;
    let values = [btns[a].innerText, btns[b].innerText, btns[c].innerText];
    let xCount = values.filter(v => v === "X").length;
    let emptyIndex = pattern[values.indexOf("")];

    if (xCount === 2 && values.includes("")) {
      playMove(emptyIndex, "O");
      checkWinner("O")
      return;
    }
  }

  // 3. Else, random move
  let randomIndex = Math.floor(Math.random() * chances.length);
  let value = chances[randomIndex];
  playMove(value, "O");

  checkWinner("O")
}

function playMove(index, symbol) {
  btns[index].innerText = symbol;
  btns[index].disabled = true;
  chances = chances.filter(item => item !== index);
}

function checkWinner(symbol) {
  let res = win_patterns.some(pattern => 
    pattern.every(index => btns[index].innerText === symbol)
  );
  if(symbol == "X" && res == true){
    gameOver = true;
    btns.forEach(btn => btn.disabled = true);
    p_score += 1;
    player_score.innerText = p_score;
  }
  else if(symbol == "O" && res == true){ 
    gameOver = true;
    btns.forEach(btn => btn.disabled = true);
    c_score += 1;
    comp_score.innerText = c_score;
  }
  // Check draw
  if (chances.length === 0) {
      gameOver = true;
      d_score +=1;
      draw.innerText = d_score;
      reset_btn.disabled = false;
  }
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
