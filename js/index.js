


const namePlayer = document.querySelector("form .box input");
const button = document.querySelector("form button");
const form = document.forms[0];




form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(namePlayer.value) // Test Value

    // Save Value in Local Storage
    localStorage.setItem("gamePlayer", namePlayer.value);

    // Go To Gmae Page
    location.href = "hunt.html";
    namePlayer.value = ""

})


// All pages
const element = document.getElementById("years");
const currentYear = new Date().getFullYear();
element.textContent = currentYear;



