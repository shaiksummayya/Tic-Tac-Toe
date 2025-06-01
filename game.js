let boxes=document.querySelectorAll("#box");
let reset=document.querySelector("#reset");
let newGamebtn=document.querySelector("#newgamebtn");
let msgconatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
let count=0;
 
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8],
];

const resetGame=()=>{
   turnO = true;
   count = 0;
  enableboxes();
  msgconatiner.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
      if(turnO){
        box.innerText="O";
        turnO=false;
      }
      else{
        box.innerText="X"
        turnO=true;
      }
      box.disabled=true;
      count++;
     let iswinner = checkWinner();

     if(count === 9 && !iswinner){
      gameDraw();
     }

    });
});
const gameDraw=()=>{
  msg.innerText=Game was a Draw;
  msgconatiner.classList.remove("hide");
  disableBoxes();
}
  const disableBoxes=()=>{
    for(let  box of boxes){
      box.disabled=true;
    }
  };


  const enableboxes=()=>{
    for(let  box of boxes){
      box.disableBoxes=false;
      box.innerText="";
    }
  };

  const showWinner = (winner) => {
  msg.innerText = Congratulation winner is ${winner};
    msgconatiner.classList.remove("hide");
   disableBoxes();
  };




const checkWinner = () => {
    for( let pattern of winPatterns){
       
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;

      if(pos1val !="" && pos2val !="" && pos3val !=""){
         if (pos1val === pos2val && pos2val === pos3val){
             console.log("winner",pos1val);
               showWinner(pos1val);
               return true;
         }
        }
    }
   };

 newGamebtn.addEventListener("click",()=>{
  console.log("reset game");
 });
 reset.addEventListener("click",()=>{
  console.log("reset game");
 });
