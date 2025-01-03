const namePlayer = document.querySelector(".name-player span");
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




const numersOfLength = 6;
let curentIndex = 0;
const incompletes = ["P_n_a____", "Str_w___ry", "Pi__a", "Gr__e", "M_n_o", "Fr__t", "L_mon", "B_n_n_", "C_c_a", "A__le"];
const incompletesTrue = ["Pineapple", "Strawberry", "Pizza", "Grape", "Mango", "Fruit", "Lemon", "Banana", "Cocoa", "Apple"];
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



function defaultSettings(ele, op, dis){
    ele.forEach((ele) => {
        ele.style.opacity = op ? op : 1;
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
    const winPlayer = document.getElementById("win");
    const losePlayer = document.getElementById("lose");
    const closeMessages = document.querySelectorAll(".close-mesg");
    const sectionMessage = document.querySelectorAll(".message-player");

    const allTry = document.querySelectorAll(".try input");
    defaultSettings(allTry, 0.1, true);

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

    const messageWiner = document.querySelector(".message-winer");

    inputs.forEach((input) => {
        if (!input.dataset.listener) { 
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    const allValuesInputs = Array.from(inputs).map((input) => input.value).join("");
                    if (allValuesInputs === incompletesTrue[curentIndex]) {
                        // تغيير ألوان الخلفية وتعطيل الحقول
                        currentTry.querySelectorAll("input").forEach((el) => {
                            el.style.backgroundColor = "#ebeb13";
                            el.style.opacity = "0.3";
                            el.disabled = true;
                        });

                        curentIndex++;
                        winPlayer.classList.add("show-message");

                        if (curentIndex < incompletes.length) {
                            const nextTry = document.querySelector(`.try-${curentIndex}`);
                            const nextInputs = nextTry.querySelectorAll("input");
                            defaultSettings(nextInputs, 1, false); 
                            enableNextTry(); // إعداد المحاولة التالية
                            focusInputs();
                        } else {
                            messageWiner.classList.add("show-mesg");
                        }
                    } else {
                        inputs.forEach((input) => {
                            input.style.backgroundColor = "#af1414";
                        })
                        losePlayer.classList.add("show-message");
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
    const winPlayer = document.getElementById("win");
    const losePlayer = document.getElementById("lose");
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
         el.style.backgroundColor = "#ebeb13";
         el.style.opacity = "0.3";
         el.disabled = true;
     });

     curentIndex++; 
     winPlayer.classList.add("show-message");

     if (curentIndex < incompletes.length) {
         enableNextTry(); 
         focusInputs();
     } else {
         const messageWiner = document.querySelector(".message-winer");
         messageWiner.classList.add("show-mesg"); 
     }
 } else {
     inputs.forEach((input) => {
         input.style.backgroundColor = "#af1414";
     });
     losePlayer.classList.add("show-message");
 }
})



function focusInputs(){
    const currentTriyes = document.querySelector(`.try-${curentIndex}`)
    if (currentTriyes){
        const input = currentTriyes.querySelectorAll("input");
        const inputs = Array.from(input).filter((int) => int.classList.contains("no-disabled"))
        inputs.forEach((input) => {
            input.focus()
        })
}
}