// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let word = prompt("Inserisci una parola");

// Controlliamo se la parola è un palindroma
function palindroma() {
  let wordArr = word.toLowerCase().split("");
  let half = Math.floor(wordArr.length / 2);
  for (i = 0, i2 = wordArr.length - 1; i < half; i++, i2--) {
    if (wordArr[i] != wordArr[i2]) {
      return "La parola <strong>NON</strong> è palindroma!";
    }
    else {
      return "La parola è palindroma!";
    }
  } 
}

document.writeln("Parola inserita: " + word + "<br>");
document.writeln(palindroma());