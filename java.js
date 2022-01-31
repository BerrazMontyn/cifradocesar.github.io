const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const inputOriginal = document.getElementById("input-original");
const cifrador = document.getElementById("cifrador");
const resultado = document.getElementById("resultado");
const rango = document.getElementById("rango");

const shifMessage = () => {
  const wordArray = [...inputOriginal.value.toUpperCase()];
  printChar(0, wordArray);
};
const printChar = (currentLetterIndex, wordArray) => {
  if (wordArray.length === currentLetterIndex) return;
  inputOriginal.value = inputOriginal.value.substring(1);
  const spanChar = document.createElement("span");
  resultado.appendChild(spanChar);
  aninmateChar(spanChar).then(() => {
    const charSinCodificar = wordArray[currentLetterIndex];
    spanChar.innerHTML = alfabeto.includes(charSinCodificar)
      ? alfabeto[
          (alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) %
            alfabeto.length
        ]
      : charSinCodificar;
    printChar(currentLetterIndex + 1, wordArray);
  });
};

const aninmateChar = (spanChar) => {
  let cambiosDeLetra = 0;
  return new Promise((resolve) => {
    const intervalo = setInterval(() => {
      spanChar.innerHTML =
        alfabeto[Math.floor(Math.random() * alfabeto.length)];
      cambiosDeLetra++;
      if (cambiosDeLetra === 3) {
        clearInterval(intervalo);
        resolve();
      }
    }, 50);
  });
};

const submit = (e) => {
  e.preventDefault();
  resultado.innerHTML = " ";
  shifMessage();
};
cifrador.onsubmit = submit;
