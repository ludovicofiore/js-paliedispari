// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente se vincerà pari o dispari
let inputWin = document.querySelector(".odd-even-select");

// chiedo all'utente un numero da 1 a 5
let inputNumber = document.querySelector(".user-number");

// gestione click event
const myButton = document.querySelector(".input-button");

myButton.addEventListener("click",
    function() {

        // recupero valore pari o dispari
        let inputWinValue = inputWin.value;
        console.log(inputWinValue);

        // recupero valore numero utente
        let inputNumberValue = inputNumber.value;
        console.log(inputNumberValue);

        // richiamo funzione per numero random
        let pcNumber = randomNum(1, 5);
        
        document.getElementById("pc-result").innerHTML = pcNumber;

        // richiamo funzione per somma pari o dispari
        let sumResult = sumOddEven();
        
        document.getElementById("sum-result").innerHTML = sumResult;


        // dichiaro chi ha vinto

        if (inputWinValue === sumResult) {
            document.getElementById("risultato").innerHTML = "hai vinto";

        } else {
            document.getElementById("risultato").innerHTML = "hai perso";
        }


        // FUNZIONI

        // funzione numero random
        function randomNum (numMin, numMax) {

            return Math.floor(Math.random() * (numMax - numMin +1)) + numMin;
        }


        // funzione somma
        function sumOddEven () {

            let sum = inputNumberValue + pcNumber;

            if (sum % 2 === 0) { //se pari
                return "pari";

            } else { //se dispari
                return "dispari";
            }
        }

    }
)





