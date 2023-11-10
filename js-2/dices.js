'use strict'
// ARRAYS DEI DADI
const computerDice = [1 , 2 , 3 , 4 , 5 , 6];
const userDice = [1 , 2 , 3 , 4 , 5 , 6];

// risultato tiro
const elementComputerDiceResult = computerDice[(Math.floor(Math.random() * computerDice.length))];
const elementUserDiceResult= userDice[(Math.floor(Math.random() * userDice.length))];

// STAMPO VALORE CASUALE DADO COMPUTER
console.log("Il dado del computer è " + elementComputerDiceResult);

// STAMPO VALORE CASUALE DADO COMPUTER
console.log("Il dado del giocatore è " + elementUserDiceResult);

if(elementComputerDiceResult > elementUserDiceResult){
    console.log("Ha vinto il computer, va beh sono macchine troppo potenti ormai...");
}
 else if(elementComputerDiceResult < elementUserDiceResult){
    console.log("Il giocatore ha vinto, sei fortissimo");
}
else if(elementComputerDiceResult === elementUserDiceResult){
    console.log("Il tiro è pari, riprova, vogliamo il sangue ");
}

