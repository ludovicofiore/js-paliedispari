// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente la parola
let inputWord = prompt("inserisci la parola");


// creo funzione 
function checkPalindrome() {

    // cambio l'ordine delle lettere (split scompone la stringa in lettere e le mette in un array, reverse cambia l'ordine delle lettere nell'array, join rimette insieme la stringa)
    let reverseInput = inputWord.split('').reverse().join('');
    console.log(reverseInput);

    if (reverseInput === inputWord) { //se palindromo
        return "palindromo"

    } else { //se non palindromo
        return "non è un palindromo"
    }
}


// richiamo risultato funzione e output

let result = checkPalindrome();
console.log(result);


