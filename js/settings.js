// All pages
const menuTest = document.querySelector(".menu");


// لما اضغط في أي مكان في البودي
document.body.addEventListener("click", (e) => {
  // لو العنصر اللي اتضغط عليه جوا المنيو (أو المنيو نفسها) → متعملش حاجة
  if (menuTest.contains(e.target)) return;

  // لو المنيو مفتوحة، اقفلها
  if (menuTest.classList.contains("show")) {
    menuTest.classList.remove("show");
  }
});



console.log("hello");
