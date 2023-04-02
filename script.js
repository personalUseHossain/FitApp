//Navigation bar dropdown toggle function starts

//variables
let dropdown = document.querySelector("ul");
let barBtn = document.querySelector(".fa-bars-staggered");

//function
barBtn.addEventListener("click", () => {
  if (barBtn.classList.contains("fa-bars-staggered")) {
    barBtn.classList.replace("fa-bars-staggered", "fa-xmark");
    dropdown.style.right = "0";
  } else if (barBtn.classList.contains("fa-xmark")) {
    barBtn.classList.replace("fa-xmark", "fa-bars-staggered");
    dropdown.style.right = "-100%";
  }
});

// Navigation bar dropdown toggle function  ends

// Fruit moving on mouse move

// variables

let fruit = document.querySelectorAll(".img");
let heroContainer = document.querySelector(".hero-container");
let last_section = document.querySelector(".last");

// function hero-section

heroContainer.addEventListener("mousemove", (e) => {
  fruit.forEach((el) => {
    let pageX = e.pageX / 20 + "px";
    let pageY = e.pageY / 20 + "px";
    el.style.transform = `translate(${pageX}, ${pageY})`;
  });
});

// function hero-section

last_section.addEventListener("mousemove", (e) => {
  fruit.forEach((el) => {
    let pageX = e.pageX / 20 + "px";
    let pageY = e.pageY / 20 + "px";
    el.style.transform = `translate(${pageX}, ${pageY})`;
  });
});

//Intersection Observer

//bottom
let Observer = new IntersectionObserver(
  (el) => {
    el.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("bottom-show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

let bottom_hidden = document.querySelectorAll(".bottom");
bottom_hidden.forEach((el) => {
  Observer.observe(el);
});

//right
let rigthObserver = new IntersectionObserver(
  (el) => {
    el.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("right-show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

let right_hidden = document.querySelectorAll(".right");
right_hidden.forEach((el) => {
  rigthObserver.observe(el);
});
