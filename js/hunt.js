const playerGame = document.getElementById("playerGame");


// Restore Name From Local Storage
const nameFromLocal = localStorage.getItem("gamePlayer");

playerGame.textContent = nameFromLocal;


if (nameFromLocal) {
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






const gameContainer = document.querySelector(".game-container");
const imageBox = "../images/logo-box.jpg";

const lose = document.querySelector(".lose")
let currentle = document.getElementById("current-le");
let word = document.getElementById("word");
let countScoor = 0;
let scoorPlayer = document.getElementById("scoor");




scoorPlayer.textContent = countScoor;

// Change Name Player At Click Here
const playerName = document.getElementById("change-player");





playerName.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("gamePlayer");
    // Go To Home Page
    location.replace("../index.html")
})



const englishAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letters = Array.from(englishAlphabet);
function randomLetterGenerator() {
    let currentIndex = 0;

    return function () {
        if (currentIndex >= letters.length) {
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

    window.location.reload();
    popupWinnerGame.classList.remove("add-winner")
})







function getRandomWords() {
    const wordsGroups = [
        ["APPLE", "BANANA", "CAR", "DOG", "EASY", "FISH", "GIRAFFE", "HOUSE", "ICE", "JUMP"],
        ["MONKEY", "KITE", "LEAF", "MOUSE", "NICE", "PAST", "QUIET", "ROCK", "SILLY", "TREE"],
        ["ZEBRA", "ANT", "BIRD", "CAT", "DOG", "ELEPHANT", "FROG", "GIRAFFE", "HAT", "JAR"]
    ];
    // create random word
    const randomGroup = wordsGroups[Math.floor(Math.random() * wordsGroups.length)];

    console.log(randomGroup);
    return randomGroup;
}

getRandomWords()

let wordsArray = getRandomWords();

let wordsUser = [];
let currentWord = 0;
let WordContent = document.querySelector(".current-letter")
let time;
let timer;
const queue = document.querySelector(".queue")
const nextWord = document.querySelector(".delete__letter");
const roundWin = document.querySelector(".round__Win");
const winScoor = document.getElementById("winScoor");
winScoor.textContent = wordsArray.length;
const timeUser = document.getElementById("time-user")
timeUser.textContent = time;
const soundWin = document.querySelector(".sound-wind");
const pupopLose = document.querySelector(".pupop__lose");
const pupopLoseClose = document.querySelector(".pupop__lose .colse");
const pupopLoseReload = document.querySelector(".pupop__lose .reload");
const soundGame =  document.getElementById("sound-game");

soundWin.pause()
soundGame.play();



// at event click reomved alert message at lose the user
pupopLoseClose.addEventListener("click", () => {
    pupopLose.classList.remove("add-message")
})


// at event click, make page is reload
pupopLoseReload.addEventListener("click", () => {
    window.location.reload();
})


// update letters of boxes
function updateettersAtWinOrLose() {
    let letters = generateRandomLetters()
    document.querySelectorAll(".box").forEach((box, index) => {
        if (index < letters.length) {
            let letterElement = box.querySelector(".letter");
            if (letterElement) {
                letterElement.textContent = letters[index];
            }
        }
    })
}


// function win animation 
function showConfetti() {
    confetti({
        particleCount: 250,
        spread: 100,
        origin: { y: 0.5 },
    });
}

function startTimer() {
    time = 30;
    timeUser.textContent = time;

    timer = setInterval(() => {
        time--;
        timeUser.textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            timer = null;
            currentWord++;
            updateettersAtWinOrLose();

            if (currentWord < wordsArray.length) {
                wordsUser = [];
                queue.textContent = "";
                word.textContent = wordsArray[currentWord];
                startTimer();
            } else {
                endGame();
            }
        }
    }, 1000);
}


startTimer();




word.textContent = wordsArray[currentWord];

if (wordsUser.length > 0) {
    queue.textContent = wordsUser
} else {
    queue.textContent = ""
}




let remainingLetters = [...englishAlphabet];
function generateRandomLetters() {
    let remainingLetters = [...englishAlphabet];
    let randomLetters = [];


    while (remainingLetters.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingLetters.length);
        let randomLetter = remainingLetters[randomIndex];

        randomLetters.push(randomLetter);
        remainingLetters.splice(randomIndex, 1);
    }

    return randomLetters;
}





function createLetters() {
    const randomLetters = generateRandomLetters();

    randomLetters.forEach((letter) => {
        let box = document.createElement("div");
        box.className = "box";

        // Create letter element
        let letterElement = document.createElement("div");
        letterElement.className = "letter";
        let textLetter = document.createTextNode(letter);
        letterElement.appendChild(textLetter);
        box.appendChild(letterElement);

        gameContainer.appendChild(box);
    });

    document.querySelectorAll(".box").forEach((ele) => {
        ele.addEventListener("click", () => {
            // if the button is disabled, no action will performed
            if (ele.disabled) return;

            console.log(ele.textContent);

            // speakText(ele.textContent)



            // add letter to user
            wordsUser.push(ele.textContent.trim());
            console.log(wordsUser);
            queue.textContent = wordsUser.join("");

            if (queue.textContent.trim() === wordsArray[currentWord]) {
                // stop last timer 
                clearInterval(timer);
                timer = null;
                time = 0;
                timeUser.textContent = time;

                // move to next word and plus one scoor
                currentWord++;

                updateettersAtWinOrLose()

                // Restart data for next word
                wordsUser = [];
                word.textContent = wordsArray[currentWord];
                queue.textContent = ""

                if (currentWord < wordsArray.length) {
                    startTimer();
                }

                // progers win and state win
                countScoor++
                scoorPlayer.textContent = countScoor;

                // show message win
                roundWin.classList.add("show__Round")
                setTimeout(() => {
                    roundWin.classList.remove("show__Round")
                }, 800)

            } else {
                if (!timer && currentWord < wordsArray.length) {
                    startTimer();
                }
                console.log("no");
            }

            // check if the user is win and lose
            if (countScoor === wordsArray.length) {
                endGame()
                return;
            }
        });
    });



    // delete last letter
    nextWord.addEventListener("click", () => {
        try {
            wordsUser.pop()
            queue.textContent = wordsUser.join("");
        } catch (error) {
            console.log(error);
        }
    })

    // next word at state end time
    function atEndTime() {
        if (time <= 0) {
            wordsUser = [];
            currentWord++;
            word.textContent = wordsArray[currentWord];
            queue.textContent = "";
        }
    }

    atEndTime()


}
createLetters();

function endGame() {
    clearInterval(timer);
    timer = null;
    WordContent.textContent = "انتهت اللعبة";

    document.querySelectorAll(".box").forEach((ele) => {
        ele.disabled = true;
        ele.classList.add("addEvent");
    });

    if (countScoor === wordsArray.length) {
        popupWinnerGame.classList.add("add-winner");
        showConfetti();
        soundWin.play();
        soundGame.pause();
    } else {
        // loseer
        pupopLose.classList.add("add-message");
        soundGame.pause();
    }
}
