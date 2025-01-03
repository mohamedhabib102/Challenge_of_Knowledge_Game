const playerGame = document.getElementById("playerGame");


// Restore Name From Local Storage
const nameFromLocal = localStorage.getItem("gamePlayer");

playerGame.textContent = nameFromLocal;


if(nameFromLocal){
    playerGame.textContent = nameFromLocal
} else {
    playerGame.textContent = " غير معروف ";
}


// Mange Menu
const menu = document.querySelector(".menu");
const buttonToShow = document.querySelector(".menu .icon");



buttonToShow.addEventListener("click", () => {
    menu.classList.toggle("show");
})




const englishAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const gameContainer = document.querySelector(".game-container");
const imageBox = "../images/logo-box.jpg";
const popupMessage = document.querySelector(".pupop");
const colseButton = document.querySelector(".pupop .colse");
const lose = document.querySelector(".lose")
let currentle = document.getElementById("current-le");
let countScoor = 0;
let scoorPlayer = document.getElementById("scoor");
let scoorLocal = localStorage.getItem("current-scoor");



if (scoorLocal){
    scoorPlayer.textContent = scoorLocal;
} else{
    scoorPlayer.textContent = 0;
}


// Change Name Player At Click Here
const playerName = document.getElementById("change-player");





playerName.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("gamePlayer");
    localStorage.removeItem("current-scoor");
    // Go To Home Page
    location.replace("../index.html")
})

// playerGame.addEventListener("click", (e) => {
//     e.preventDefault();
//     localStorage.removeItem("gamePlayer");
//     localStorage.removeItem("current-scoor");
//     // Go To Home Page
//     document.location.href = "../index.html";
//     console.log(true)
// })



// let availableLetters  = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

let letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
function randomLetterGenerator() {
    let currentIndex = 0;

    return function() {
        if (currentIndex  >= letters.length) {
            return null; 
        }


        const letter = letters[currentIndex];
        currentIndex++

        return letter;
    };
}

const getRandomLetter = randomLetterGenerator();







// Elements Winner Game
const popupWinnerGame = document.querySelector(".pupop-is-winer");
const homeBtn = document.querySelector(".pupop-is-winer .home");
const reloadBtn = document.querySelector(".pupop-is-winer .reload");


// To Home
homeBtn.addEventListener("click", () => {
    window.location.href = "inedx.html";
    popupWinnerGame.classList.remove("add-winner")
})

// Reaset Value in LocalStorage And Scoor Player
reloadBtn.addEventListener("click", () => {
    localStorage.removeItem("current-scoor")
    window.location.reload();
    popupWinnerGame.classList.remove("add-winner")
})




currentle.textContent = getRandomLetter();


function createLetters(){
    let remainingLetters = [...englishAlphabet];

    for (let i = 0; i < englishAlphabet.length; i++){
        let box = document.createElement("div");
        box.className = "box";


        const randomIndex = Math.floor(Math.random() * remainingLetters.length);
        let randomLetter = remainingLetters[randomIndex];


        remainingLetters.splice(randomIndex, 1);
        // Create letter
        let letter = document.createElement("div");
        letter.className = "letter back";
        let textLetter = document.createTextNode(randomLetter);
        letter.appendChild(textLetter);
        box.appendChild(letter);

        // Create Image 
        let image = document.createElement("img");
        image.className = "image-logo face";
        image.src = imageBox;
        box.appendChild(image);

        gameContainer.appendChild(box);
    }

    document.querySelectorAll(".box").forEach((ele) => {
        ele.addEventListener("click", () => {
            if (ele.classList.contains("show")) return;
            ele.classList.add("show");
            // Condition Win
            const currentLetter = ele.children[0];
            if (currentLetter.textContent === currentle.textContent){
                // State Win 
                popupMessage.classList.add("add-message")
                currentle.textContent = getRandomLetter();
                let count = parseInt(scoorPlayer.textContent++);
                localStorage.setItem("current-scoor", count+1);
                ele.classList.add("disabled")
            } else{
                // State Lose
                console.log(false);
                lose.classList.add("show");
                // ele.classList.add("losePlayer");
                // Reset Messages
                setTimeout(() => {
                    ele.classList.remove("show");
                }, 200)

                setTimeout(() => lose.classList.remove("show"), 1000)
            }

            if (currentLetter.textContent === currentle.textContent){
                const allBoxesShown = document.querySelectorAll(".box").every((element) => element.classList.contains("show"));
                if (allBoxesShown) {
                    popupWinnerGame.classList.add("add-winner");
                    console.log("Your Winner");
                } else {
                    console.log(
                    "%cYour %cGamming %cNow", 
                    "color: red; font-size: 30px",
                    "color: red; font-size: 30px",
                    "color: red; font-size: 30px"
                    );
                }
            }
        })
    })
}
createLetters();

// Remove Popup
colseButton.addEventListener("click", () => {
    popupMessage.classList.remove("add-message");
});

