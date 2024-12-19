"use strict"


//solusi saya
// const rollDice = document.querySelector("#rollDice")
// const diceImage = document.querySelector("#dice")
// const holdButton = document.querySelector("#hold")
// const currrentNumberLeft = document.querySelector(".currentNumbLeft")
// const currrentNumberight = document.querySelector(".currentNumbRight")
// const playerScoreLeft = document.querySelector(".numberLeftContainer")
// const playerScoreRight = document.querySelector(".numberRightContainer")
// const rightContainer = document.querySelector(".right-container")
// const leftContainer = document.querySelector(".left-container")
// const newGameButton = document.querySelector("#newGameButton")
// const player1 = document.querySelector(".player1")
// const player2 = document.querySelector(".player2")
// const textHeader =  document.querySelector(".header-text")

// let totalBefore = 0
// let scoreResult = 0
// let totalCurrent = 0
// let totalScore = 0

// let randomNumber = function () {
//     let randomMath = Math.floor(Math.random()*6+1)
//     return randomMath  
// } 
   
// rollDice.addEventListener("click", function () {
// let randomNumb = randomNumber()


// // random number to appear dice image
//         switch (randomNumb) {
//             case 1:
//                 diceImage.classList.remove("dice")
//                 diceImage.setAttribute("src","./image/dice-1.png")
//             break;
//             case 2:
//                 diceImage.classList.remove("dice")
//                 diceImage.setAttribute("src","./image/dice-2.png")
//             break;
//             case 3:
//                 diceImage.classList.remove("dice")
//                 diceImage.setAttribute("src","./image/dice-3.png")
//             break;
//             case 4:
//                 diceImage.classList.remove("dice")
//                 diceImage.setAttribute("src","./image/dice-4.png")
//             break;
//             case 5:
//                 diceImage.classList.remove("dice")
//                 diceImage.setAttribute("src","./image/dice-5.png")
//             break;
//             case 6:
//                 diceImage.classList.remove("dice")
//                 diceImage.setAttribute("src","./image/dice-6.png")
//             break;
//         }


// if (randomNumb !== 1 ) {
//     if (!rightContainer.classList.contains("switchRight")) {
//         totalCurrent = randomNumb + totalBefore
//         currrentNumberLeft.textContent = totalCurrent
//         if (totalCurrent > totalBefore) {
//             totalBefore = totalCurrent   
//         }
//     }
//     else if(leftContainer.classList.contains("switchLeft")) {
//         totalCurrent = randomNumb + totalBefore
//         currrentNumberight.textContent = totalCurrent
//         if (totalCurrent > totalBefore) {
//             totalBefore = totalCurrent   
//         }

//     }


   

// } else {
//     if (!rightContainer.classList.contains("switchRight")) {
//     player1.classList.toggle("switchFontLeft")
//     player2.classList.toggle("switchFontRight")
//     rightContainer.classList.toggle("switchRight")
//     leftContainer.classList.toggle("switchLeft")
//       if (totalBefore > 0) {
//         totalBefore = 0
//         currrentNumberLeft.textContent = totalBefore
//     }
//     }else if (leftContainer.classList.contains("switchLeft")) {
//     player1.classList.toggle("switchFontLeft")
//     player2.classList.toggle("switchFontRight")
//     rightContainer.classList.toggle("switchRight")
//     leftContainer.classList.toggle("switchLeft")
//       if (totalBefore > 0) {
//         totalBefore = 0
//         currrentNumberight.textContent = totalBefore
//     }
        
//     }
    

// }



  
// })

// //hold button push
// holdButton.addEventListener("click", function () {
// if (!rightContainer.classList.contains("switchRight")) {
//     totalScore = totalBefore + Number(playerScoreLeft.textContent) 
//     playerScoreLeft.textContent = totalScore
//     if (totalBefore > 0) {
//         totalBefore = 0
//         currrentNumberLeft.textContent = totalBefore
//     }
//     rightContainer.classList.toggle("switchRight")
//     leftContainer.classList.toggle("switchLeft")
//     player1.classList.toggle("switchFontLeft")
//     player2.classList.toggle("switchFontRight")


// }else if (leftContainer.classList.contains("switchLeft")) {
//     totalScore = totalBefore + Number(playerScoreRight.textContent) 
//     playerScoreRight.textContent = totalScore
//     if (totalBefore > 0) {
//         totalBefore = 0
//         currrentNumberight.textContent = totalBefore
//     }
//     rightContainer.classList.toggle("switchRight")
//     leftContainer.classList.toggle("switchLeft")
//     player1.classList.toggle("switchFontLeft")
//     player2.classList.toggle("switchFontRight")
// }


// // // if condition win =100
// if (  Number(playerScoreLeft.textContent) >= 100) {
//     leftContainer.classList.add("winContainer")
//     player1.classList.add("winTextPlayer")
//     player1.classList.toggle("switchFontLeft")
//     player2.classList.toggle("switchFontRight")
//     textHeader.textContent = "Congratulation player 1 win 🚩🚩"

//     rollDice.addEventListener("click", function () {
//         rollDice.disabled = true
//     })

//     holdButton.addEventListener("click",function () {
//         holdButton.disabled = true
//     })
    
        

// } else if ( Number(playerScoreRight.textContent) >= 100) {
//     rightContainer.classList.add("winContainer")
//     player2.classList.add("winTextPlayer")
//     player1.classList.toggle("switchFontLeft")
//     player2.classList.toggle("switchFontRight")
//     textHeader.textContent = "Congratulation player 2 win 🚩🚩"

//     rollDice.addEventListener("click", function () {
//         rollDice.disabled = true
//     })

//     holdButton.addEventListener("click",function () {
//         holdButton.disabled = true
//     })
    
// }

// })


// //new game push
// newGameButton.addEventListener("click", function () {
//       totalScore = 0
//       playerScoreLeft.textContent = totalScore
//       playerScoreRight.textContent = totalScore

//       totalBefore = 0
//       currrentNumberLeft.textContent = totalBefore
//       currrentNumberight.textContent = totalBefore

//       diceImage.classList.toggle("dice")
        
//       rightContainer.classList.remove("switchRight")
//       leftContainer.classList.remove("switchLeft")

//     rightContainer.classList.remove("winContainer")
//     player2.classList.remove("winTextPlayer")
//     leftContainer.classList.remove("winContainer")
//     player1.classList.remove("winTextPlayer")
//     textHeader.textContent = "PIG GAME 🔥"

//       rollDice.addEventListener("click", function () {
//         rollDice.disabled = false
//     })

//     holdButton.addEventListener("click",function () {
//         holdButton.disabled = false
//     })
// })


//solusi asli

//selector properti
const rollDiceBtn = document.querySelector("#rollDice")
const diceImage = document.querySelector("#dice")
const currentNumber = document.querySelector(".current-number")
const leftContainer = document.querySelector(".left-container")
const rightContainer = document.querySelector(".right-container")
const playerTextLeft = document.querySelector(".player1")
const playerTextRight = document.querySelector(".player2")
const holdButton = document.querySelector("#hold")
const scoreLeft = document.querySelector(".numberLeftContainer")
const scoreRight = document.querySelector(".numberRightContainer")
const headerText = document.querySelector(".header-text")
const newGame = document.querySelector("#newGameButton")
const container = document.querySelector(".container-content")

let currentScore = 0
let player = "Left" // select player player 1 atau player 2
let totalScoreLeft = 0
let totalScoreRight = 0
let playing = true

//FUNCTION
//visual player change function
let turnPlayerVisual = function () {
    leftContainer.classList.toggle("switchLeft")
    rightContainer.classList.toggle("switchRight")
    playerTextLeft.classList.toggle("switchFontToLeft")
    playerTextRight.classList.toggle("switchFontToRight")    
}

// turn current become 0 and turn visual function
let turnCurrentScore = function () {
     currentScore = 0
     document.querySelector(`.currentNumb${player}`).textContent = currentScore
     player = player === "Left" ? "Right" : "Left";
     turnPlayerVisual()
}

// function for win score
let winPlayer = function (player, playerNumber) {
      headerText.textContent = `Congrats, ${playerNumber} wins 🚩🚩`
      document.querySelector(`.${player}-container`).classList.add("winContainer")
      document.querySelector(`.${playerNumber}`).classList.add("winTextPlayer")
      turnPlayerVisual()
}

// function disable button when wins the game
let disableButton  = function () {
    rollDiceBtn.addEventListener("click", function () {
        rollDiceBtn.disabled = true
    })
        holdButton.addEventListener("click", function () {
        holdButton.disabled = true          
    })  
}


//roll dice button triger
rollDiceBtn.addEventListener("click", function () {
if (playing) {
       //random math for dice
    let randomNumber = Math.floor(Math.random()*6+1)

    //show displa dice roll
    diceImage.classList.remove("dice")
    diceImage.src = `./image/dice-${randomNumber}.png`

    //if statement, jika diceroll !=1 (true)
    if (randomNumber !== 1) {
        currentScore += randomNumber
        // display total current score bettween player 1 or 2        
        document.querySelector(`.currentNumb${player}`).textContent = currentScore

    }else {
        // jika kondisi roll dice = 1 (false)
        // change current score become 0
       turnCurrentScore()
    } 

}
 
})


//Hold button trigger
holdButton.addEventListener("click", function () {
if (playing) {
    // add currenct score to total score
    if (player === "Left") {
        totalScoreLeft = totalScoreLeft + currentScore
        document.querySelector(`.number${player}Container`).textContent = totalScoreLeft
        
    } else {
        totalScoreRight = totalScoreRight + currentScore
        document.querySelector(`.number${player}Container`).textContent = totalScoreRight
    }
    turnCurrentScore()

    // if total score  >=100
    if (Number(scoreLeft.textContent) >= 100) {
        winPlayer("left","player1")
        diceImage.classList.add("dice")
        playing = false
        
    }else if (Number(scoreRight.textContent) >= 100){
        winPlayer("right","player2")
        diceImage.classList.add("dice")
        playing = false
    }    
}
})

//new game button or reset button
newGame.addEventListener("click" , function () {
    location.reload()
})





