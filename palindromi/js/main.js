// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente la parola
let inputWord = document.querySelector(".user-word");


// aggiungo funzione click

const myButton = document.querySelector(".input-button");

myButton.addEventListener("click",
    function() {

        // recupero valore dell'input
        let inputWordValue = inputWord.value;

        // richiamo risultato funzione e output
        let result = checkPalindrome(inputWordValue);
        console.log(result);

        // porto output in pagina 
        document.getElementById("risultato").innerHTML = result;

        
    }
)




// FUNZIONI

function checkPalindrome(string) {

    // cambio l'ordine delle lettere (split scompone la stringa in lettere e le mette in un array, reverse cambia l'ordine delle lettere nell'array, join rimette insieme la stringa)
    let reverseInput = string.split('').reverse().join('');
    console.log(reverseInput);

    if (reverseInput === string) { //se palindromo
        return "palindromo"

    } else { //se non palindromo
        return "non è un palindromo"
    }
}
