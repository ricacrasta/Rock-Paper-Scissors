let userscore=0;
let compscore=0;
let finalscore=5;

const choices=document.querySelectorAll(".choice");
const me=document.querySelector("#messege")
const userboard=document.querySelector("#user-score")
const compboard=document.querySelector("#comp-score")


const draw=()=>{
    console.log("It was draw")
    me.innerText= "Its draw"
    me.style.backgroundColor="green"
}
const lose=(userchoice,compchoice)=>{
    compscore++
    compboard.innerText=compscore
    console.log("you lost")
    me.innerText=`you lost,${compchoice} beats ${userchoice}`;
    me.style.backgroundColor="cyan"
    

}
const win=(userchoice,compchoice)=>{
    userscore++
    userboard.innerText=userscore
    console.log("you won!")
    me.innerText=`you won!!!!! ${userchoice} beats ${compchoice}`;
    me.style.backgroundColor="yellow"

}

const gencomputer=() =>{
    const option =["rock","paper","scissor"]
    const rand = Math.floor(Math.random()*3);
    return option[rand]
}

const playgame=(userchoice) =>{
    console.log("user choice= ",userchoice);
    const compchoice=gencomputer()
    console.log("comp choice =",compchoice)

    if(userchoice==compchoice){
        draw();

    }
    else if((userchoice=="rock"&& compchoice=="paper" ) ||
      (userchoice=="paper" && compchoice=="scissor")||
      (userchoice==="scissor" && compchoice==="rock"))
      {
       lose(userchoice,compchoice)
      }
    else{
       win(userchoice,compchoice)
      }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id");
        console.log("choices was clicked",userchoice)
        playgame(userchoice)

    })
    
});