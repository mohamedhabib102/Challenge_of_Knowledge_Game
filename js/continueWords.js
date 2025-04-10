const namePlayer = document.querySelector(".name-player p");
const currentName = localStorage.getItem("gamePlayer");
const changeButton = document.getElementById("change-player");





if (currentName){
    namePlayer.textContent = currentName;
} else{
    namePlayer.textContent = " غير معروف ";
}


const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu .icon");


menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show")
});

changeButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("gamePlayer");
    history.replaceState(null, "", "../index.html");
    location.replace("../index.html");
})


// Array of objects: each has the incomplete word and its true value
let wordPairs = [
    { incomplete: "P_n_a____", complete: "Pineapple" },
    { incomplete: "Str_w___ry", complete: "Strawberry" },
    { incomplete: "Pi__a", complete: "Pizza" },
    { incomplete: "Gr__e", complete: "Grape" },
    { incomplete: "M_n_o", complete: "Mango" },
    { incomplete: "Fr__t", complete: "Fruit" },
    { incomplete: "L_mon", complete: "Lemon" },
    { incomplete: "B_n_n_", complete: "Banana" },
    { incomplete: "C_c_a", complete: "Cocoa" },
    { incomplete: "A__le", complete: "Apple" }
  ];
  
  // Shuffle the word pairs on page load
  wordPairs.sort(() => Math.random() - 0.5);
  
  // Separate them again into two arrays
  const incompletes = wordPairs.map(pair => pair.incomplete);
  const incompletesTrue = wordPairs.map(pair => pair.complete);
  



const numersOfLength = 6;
let curentIndex = 0;
const triesContainer = document.querySelector(".words-container .triyes");


function createTries() {
    incompletes.forEach((incomplete, index) => {
        const divTry = document.createElement("div");
        divTry.className = `try-${index} try`;

        incomplete.split("").forEach((char, charIndex) => {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.className = "input-letter-" + parseInt(charIndex + 1) + " input"; 

            if (char === "_") {
                input.disabled = false;
                input.classList.add("no-disabled") 
            } else {
                input.value = char; 
                input.disabled = true;
                input.classList.add("disabled");
                input.style.opacity = "0.7"
            }

            divTry.appendChild(input);
        });

        triesContainer.appendChild(divTry);
    });
}

createTries();

// message win
const winerGame = document.querySelector(".pupop-is-winer");
const toHome = document.querySelector(".to__home");
const reloadPage = document.querySelector(".reload__page");
const voiceWin = document.querySelector(".sound-wind")
voiceWin.pause()
function showConfetti() {
    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.5},
    });
  }

toHome.addEventListener("click", (e) => {
    e.preventDefault();
    // Go To Home Page
    location.replace("../index.html")
})

// reload page at event click
reloadPage.addEventListener("click", () => {
    window.location.reload()
})

function defaultSettings(ele, op, dis){
    ele.forEach((ele) => {
        ele.classList.remove("add-opacity");
        ele.style.opacity = `${op ? op : 1}!important`;
        ele.disabled = dis ? dis : false;
    })
}

const helpButton = document.querySelector(".help-btn");
const heleMessage = document.querySelector(".help-btn span");
const contentHelp = document.querySelector(".content-help");
let count = 3;

// console.log(incompletesTrue[curentIndex].slice(2, 6))
heleMessage.textContent = count;
helpButton.addEventListener("click", () => {

    if(count > 0){
        count--
        heleMessage.textContent = count;
        
    }
    
    contentHelp.textContent = incompletesTrue[curentIndex].slice(2, 6);

    if (count === 0){
        helpButton.disabled = true;
    } else{
        console.log(false)
    }
})

function enableNextTry() {
    const currentTry = document.querySelector(`.try-${curentIndex}`);
    const inputs = currentTry.querySelectorAll("input");
    const losePlayer = document.getElementById("lose");
    const closeMessages = document.querySelectorAll(".close-mesg");
    const sectionMessage = document.querySelectorAll(".message-player");

    const allTry = document.querySelectorAll(".try input");
    defaultSettings(allTry, 0.1, true);
    focusInputs()

    closeMessages.forEach((ele) => ele.addEventListener("click", () => {
        sectionMessage.forEach((e) => {
            e.classList.remove("show-message")
        })
    }))


    inputs.forEach((ele) => {
        ele.classList.add("add-opacity");

        if (ele.value === "") {
            ele.disabled = false;
        }
    });


    inputs.forEach((input) => {
        if (!input.dataset.listener) { 
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    const allValuesInputs = Array.from(inputs).map((input) => input.value).join("");
                    if (allValuesInputs === incompletesTrue[curentIndex]) {
                        currentTry.querySelectorAll("input").forEach((el) => {
                            el.style.backgroundColor = "#05b703";
                            el.style.opacity = "0.3";
                            el.disabled = true;
                        });
                        
                        curentIndex++;
                        // winPlayer.classList.add("show-message");
                        
                        if (curentIndex < incompletes.length) {
                            const nextTry = document.querySelector(`.try-${curentIndex}`);
                            const nextInputs = nextTry.querySelectorAll("input");
                            defaultSettings(nextInputs, 1, false); 
                            enableNextTry();
                            focusInputs()
                        } else {
                            const inputs = document.querySelectorAll("input");
                            defaultSettings(inputs, 0.3, true)
                            winerGame.classList.add("add-winner")
                            voiceWin.play()  
                            showConfetti()
                        }
                    } else {
                        const inputs = Array.from(currentTry.querySelectorAll("input")).
                        filter(input => input.classList.contains("no-disabled"));
                        inputs.forEach((el) => {
                            el.style.backgroundColor = "#c33d3d";
                        })
                    }
                }
            });
            input.dataset.listener = true;
        }
    });
}


const checkButton = document.getElementById("checke");


enableNextTry()


checkButton.addEventListener("click", () => {
    const closeMessages = document.querySelectorAll(".close-mesg");
    const sectionMessage = document.querySelectorAll(".message-player");


    closeMessages.forEach((ele) => ele.addEventListener("click", () => {
        sectionMessage.forEach((e) => {
            e.classList.remove("show-message")
        })
    }))

 const currentTry = document.querySelector(`.try-${curentIndex}`);
 const inputs = currentTry.querySelectorAll("input");


 const allValuesInputs = Array.from(inputs).map((input) => input.value).join("");

 if (allValuesInputs === incompletesTrue[curentIndex]) {

     currentTry.querySelectorAll("input").forEach((el) => {
         el.style.backgroundColor = "#05b703";
         el.style.opacity = "0.3";
         el.disabled = true;
     });

     curentIndex++; 


     if (curentIndex < incompletes.length) {
         enableNextTry(); 
         focusInputs()
     } else {
         winerGame.classList.add("add-winner")
         voiceWin.play()  
         showConfetti()
     }
 } else {
     inputs.forEach((input) => {
         input.style.backgroundColor = "#c33d3d";
     });
 }
})


function focusInputs() {
    const currentTry = document.querySelector(`.try-${curentIndex}`);
    
    if (currentTry) {
        const inputs = Array.from(currentTry.querySelectorAll("input"))
            .filter(input => input.classList.contains("no-disabled"));


            console.log(inputs);
            

        const firstEmptyInput = inputs.find(input => input.value === "");

        
        if (firstEmptyInput) {
            firstEmptyInput.focus();
            console.log(firstEmptyInput);
            
        }

        inputs.forEach((input, index) => {
            input.addEventListener("input", () => {
                if (input.value !== "" && index < inputs.length - 1) {
                    let nextInput = inputs[index + 1]; 

                    console.log(nextInput);
                    

                    if (nextInput) {
                        nextInput.focus(); 
                    }
                }
            });
        });
    }
}

focusInputs()






