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

createContent('.about__description--js', 'Witaj świecie!')