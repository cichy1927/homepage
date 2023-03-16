const firstName = "Bartek";
const age = 36;

function calculate(myNumber) {
  console.log(`Mój numer to: ${myNumber}`);
  return myNumber * 7;
}

const myResult = calculate(age);
console.log(`Wynik funkcji to ${myResult}`);

function greet(age, firstName) {
  console.log(`Siema! Nazywam się ${firstName} i mam ${age} lat.`);
}
greet(age, firstName);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".about__description--js", "Witaj świecie!");

const button = document.querySelector(".action--js");
button.addEventListener("click", () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `Witaj drogi Odwiedzający, nazywam się Bartek`;
});

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
