'use strict';
// INPUT DATA
let elementMail = prompt("inserisca la sua mail");

const mailsContainer = ["mariorossi@gmail.com" , "albevorox@gmail.com" , "codproplayer@lathieves.com" , "elonmusk@hotmail.it" , "pippobaudo@tiscali.it"];



    if(elementMail.value === mailsContainer[0]){
        console.log("l'utente è correttamente registrato.");
    }
    else{
        console.log("La mail non è registrata");
    }

