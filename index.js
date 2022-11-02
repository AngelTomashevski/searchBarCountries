// Exercise 7
// - There is a html starter file with a setup created for you.
// - All the countries are in countries-db.js
// - When you first come to the page, show all the countries as <li> elements inside the <ul> list in html.
// - When you start typing in the input, it should start filtering the countries by the letters typed in the input (letter by letter) and display only those ones in the ul list. (something like google)

const ulContainer = document.querySelector(".countries-list");
const input = document.querySelector("input");
console.log(input);

countriesData.forEach((country) => {
  ulContainer.innerHTML += `<li> ${country} </li>`;
});

input.addEventListener("keyup", () => {
  let newArr = countriesData.filter((country) => {
    return (
      country.toLowerCase().substring(0, input.value.length) ===
      input.value.toLowerCase()
    );
  });
  ulContainer.innerHTML = "";
  newArr.forEach((country) => {
    ulContainer.innerHTML += `<li> ${country} </li>`;
  });
});
