// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiedo all'utente un numero da 1 a 5
let inputNumber = parseInt(prompt("inserisci un numero da 1 a 5"));

console.log(inputNumber);

// richiamo funzione per numero random
let pcNumber = randomNum(1, 5);
console.log(pcNumber);

// richiamo funzione per somma pari o dispari


// dichiaro chi ha vinto




// FUNZIONI

// funzione numero random
function randomNum (numMin, numMax) {

    return Math.floor(Math.random() * (numMax - numMin +1)) + numMin;
}


// funzione somma


