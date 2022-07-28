// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Chiedo di scegliere pari o dispari e poi un numero da 1 a 5
let pd = prompt("PARI o DISPARI?");

// Check se ha scritto pari o dispari
if (pd.toLowerCase() == "pari" || pd.toLowerCase() == "dispari") {
  let nUser = parseInt(prompt("Scegli un numero da 1 a 5!"));

  // Check se sono stati inseriti i numeri giusti
  if ((nUser > 5) || (nUser < 1)) {
    do {
      alert("Numero non valido.");
      nUser = parseInt(prompt("Scegli un numero da 1 a 5!"));
    }
    while ((nUser > 5) || (nUser < 1));
  }

  // Numero random da 1 a 5 per il computer
  function nRandom() {
    return parseInt(Math.floor(Math.random() * 5) +1);
  }
  let nCPU = nRandom(); // Registro in memoria il numero assegnandolo ad una variabile

  sum = nUser + nCPU; // Sommo le due variabili con i numeri

  document.writeln("Hai scelto <strong>" + pd.toLowerCase() + "</strong><br>");
  document.writeln("Il tuo numero: <strong>" + nUser + "</strong><br>");
  document.writeln("Il numero del computer: <strong>" + nCPU + "</strong><br>");
  document.writeln("La somma è <strong>" + sum + "</strong>, ");

  // Check se la somma delle due variabili è un numero pari o un numero dispari
  function pdCheck() {
    if (sum % 2 != 0) {
      sum = "dispari";
    }
    else {
      sum = "pari";
    }
    return sum;
  }

  let sumCheck = pdCheck(); // Assegno ad una variabile per tenerla in memoria
  document.writeln("è un numero <strong>" + sumCheck + "</strong><br>");

  // Dichiaro chi ha vinto
  if (pd.toLowerCase() == sumCheck) {
    document.writeln("<div class=\"win\">Hai vinto!</div>");
  }
  else {
    document.writeln("<div class=\"lose\">Hai perso!</div>");
  }
}
else {
  alert("Scrivi pari o dispari.");
  location.reload();
}