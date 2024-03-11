const options = document.querySelector(".options");
const computerBtn = options.querySelector(".computer");
const friendBtn = options.querySelector(".friend");
const xBtn = options.querySelector(".x");
const oBtn = options.querySelector(".o");
const playBtn = options.querySelector(".play");
const player = new Object;
const gameOverElement = document.querySelector(".gameover");
let OPPONENT;

computerBtn.addEventListener("click", function(){
    OPPONENT = "computer";
    switchActive(friendBtn,computerBtn);
})

friendBtn.addEventListener("click", function(){
    OPPONENT = "friend";
    switchActive(computerBtn,friendBtn);
})
xBtn.addEventListener("click", function(){
    player.man = "X";
    player.computer = "O";
    player.friend = "O";
    switchActive(oBtn,xBtn);
})
oBtn.addEventListener("click", function(){
    player.man = "O";
    player.computer = "X";
    player.friend = "X";
    switchActive(xBtn,oBtn);
})
playBtn.addEventListener("click", function(){
    if(!OPPONENT){
        computerBtn.style.backgroundColor = "red";
        friendBtn.style.backgroundColor = "red";
        return;
    }
    if(!player.man){
        oBtn.style.backgroundColor = "red";
        xBtn.style.backgroundColor = "red";
        return;
    }
    
    init(player,OPPONENT);
    options.classList.add("hide");
    

})


function switchActive(off, on){
    off.classList.remove("active");
    on.classList.add("active");
}



