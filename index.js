const genPassEl = document.querySelector("#genPass");
const firstPasswordEl = document.querySelector("#first-pwd");
const secondPasswordEl = document.querySelector("#second-pwd");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

genPassEl.addEventListener("click", function () {
  let randomArray = [];
  firstPasswordEl.textContent = "";
  secondPasswordEl.textContent = "";
  for (let i = 0; i < characters.length; i++) {
    let characterIndex = Math.floor(Math.random() * 91);
    let randomCharacter = characters[characterIndex];
    randomArray.push(randomCharacter);
  }
  let passwordOne = randomArray.slice(0, 15).join("");
  let passwordTwo = randomArray.slice(16, 30).join("");

  firstPasswordEl.innerHTML += `<p> ${passwordOne}</p>`;
  secondPasswordEl.innerHTML += `<p> ${passwordTwo}</p>`;
});
