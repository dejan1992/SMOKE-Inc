const showcase = document.querySelector(".showcase");
const toogle = document.querySelector(".toggle");
const ul = document.querySelector("ul");
const ulSocial = document.querySelector(".social ul");
const cards = document.querySelectorAll(".card-content");

// Onload load nav after content
document.body.onload = function () {
  ul.style.display = "block";
  ulSocial.style.display = "flex";
};

// Adding classes for navigaion
toogle.addEventListener("click", () => {
  showcase.classList.toggle("active");
  toogle.classList.toggle("active");
});

// Cards rotate on click
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("rotate-active");

  });
});




