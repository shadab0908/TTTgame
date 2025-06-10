let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".winMsg")
let msg = document.querySelector("#msg")
let turn0 = true; // playerX playerO

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () =>{
    turn0 = true
    count = 0;
    enableBox();
    msgContainer.classList.add("hide");
}

let count = 0;
boxes.forEach((box) =>{

        box.addEventListener("click",()=>{
            playClick();
            console.log("button was clicked");
            // box.innerText = "HTML";
            
            if(turn0){
                box.innerText = "O";
                turn0 = false;
                count+=1;
            }else{
                box.innerText = "X";
                turn0 = true;
                count+=1;
            }
            box.disabled = true;
            checkWinner();
        
    });
}) ;

const enableBox = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBox = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

let showWinner = (Winner)=>{ 
    playWin();
    msg.innerText = `Congratulations\n winner is\n ${Winner}`
    msgContainer.classList.remove("hide");
    disableBox();
}
let showDraw = () =>{
    playDraw();
    msg.innerText = `DRAW both player gets 1 point each...`
    msgContainer.classList.remove("hide");
    count = 0;
    enableBox;
    
}

const checkWinner = () => {
    let winnerFound = false;
    for(pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText; 
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText; 

        if(pos1val != ""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showWinner(pos1val);
                winnerFound = true;
                break;
            }
        }
    }

    if(!winnerFound && count === 9){
                showDraw();
            }

};



// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("button was clicked");
//     });
// });


newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);


const clickSound = document.getElementById("clickSound");
const winSound = document.getElementById("winSound");
const drawSound = document.getElementById("drawSound");

clickSound.volume = 0.5;
winSound.volume = 0.7;
drawSound.volume = 0.6;
;

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function playWin() {
  winSound.currentTime = 0;
  winSound.play();
}

function playDraw() {
  drawSound.currentTime = 0;
  drawSound.play();
}
