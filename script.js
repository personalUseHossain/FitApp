//Navigation bar dropdown toggle function starts

//variables
let dropdown = document.querySelector("ul");
let barBtn = document.querySelector(".fa-bars-staggered");

//function
barBtn.addEventListener("click", () => {
  if (barBtn.classList.contains("fa-bars-staggered")) {
    barBtn.classList.replace("fa-bars-staggered", "fa-xmark");
    dropdown.style.top = "8em";
  } else if (barBtn.classList.contains("fa-xmark")) {
    barBtn.classList.replace("fa-xmark", "fa-bars-staggered");
    dropdown.style.top = "-41%";
  }
});

//Navigation bar dropdown toggle function  ends

//Fruit moving on mouse move

//variables

// let fruit = document.querySelectorAll("img");
// let heroContainer = document.querySelector(".hero-container");

// heroContainer.addEventListener("mousemove", (e) => {
//   fruit.forEach((el) => {
//     let pageX = e.pageX / 100 + "px";
//     let pageY = e.pageY / 100 + "px";
//     el.style.transform = `translate(${pageX} ${pageY})`;
//   });
// });
