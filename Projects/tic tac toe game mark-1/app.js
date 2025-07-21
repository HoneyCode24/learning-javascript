let btns = document.querySelectorAll('.box');
let st_btn = document.querySelector('.start_btn');
let isgameover = false
let chances = [0,1,2,3,4,5,6,7,8];
let updated_chances =[];
let mgs_p = document.querySelector('.mgs_p')
// game start 
st_btn.addEventListener("click", first_mover)

// random function to choose whose is gone move first and also to look after alternate moves and not able to use the used box 
function first_mover(e){
    let val = Math.floor(Math.random()*9);
    console.log(val)
    if(val % 2 == 0){
        comp_chance();
    }
    else{
        mgs_p.innerText = "your turn"
    }
    st_btn.disabled = true;
}

function comp_chance(){
    if(isgameover) return;
    if (chances.length === 0) return;  // No moves left

    let randomIndex = Math.floor(Math.random() * chances.length);
    console.log("value of random index is :", randomIndex)
    let value = chances[randomIndex];

    btns[value].innerText = "X";
    btns[value].disabled = true;
    mgs_p.innerText = "computer's move"
    console.log("chances array before removing random index from it:", chances)
    chances = chances.filter(item => item !== value);
    console.log("chances array after removing random index from it:", chances)
    check_winner();
     if (!isgameover) {
        mgs_p.innerText = "Your turn";
    }
}

btns.forEach(function(btn){
    btn.addEventListener('click',user_chance)
})

function user_chance(e){
    let btn = e.target;

    if (chances.length === 0) return;  // No moves left

    btn.innerText = "O";
    btn.disabled = true;
    let index = Array.from(btns).indexOf(btn);
    console.log("the button that i choose is :", index)
    if (!chances.includes(index)) return;
    console.log("chances array before removing user index from it:", chances)
    chances = chances.filter(item => item !== index);
    console.log("chances array after removing user index from it:", chances)
    computer = true;
    user = false;
    check_winner();
    comp_chance();
}
function check_winner(){
    let win_pattern = [[0,1,2],[0,4,8],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]]
    for(let i=0;i<win_pattern.length; i++){
        postval1 = btns[win_pattern[i][0]].innerText;
        postval2 = btns[win_pattern[i][1]].innerText;
        postval3 = btns[win_pattern[i][2]].innerText;
        if(postval1!=='' && postval2!=='' && postval3!==''){
            if(postval1 == postval2 && postval2 == postval3 && postval1== postval3){
                if(postval1 == "X"){
                    isgameover = true
                    mgs_p.innerText = "Computer win!"
                    btns.forEach(btn=>{
                        btn.disabled = true
                    })
                }
                else{
                    mgs_p.innerText = "you win!"
                    isgameover = true; 
                    btns.forEach(btn=>{
                        btn.disabled = true
                    })
                }
            }
        }
        
    }
}

