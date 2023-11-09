'use strict';
// INPUT DATA
let elementMail = prompt("inserisca la sua mail");

const mailsContainer = ["mariorossi@gmail.com" , "albevorox@gmail.com" , "codproplayer@lathieves.com" , "elonmusk@hotmail.it" , "pippobaudo@tiscali.it"];



    if(prompt.value === mailsContainer[0] && mailsContainer[1] && mailsContainer[2] && mailsContainer[3]){
        console.log("l'utente è correttamente registrato.");
    }
    else{
        console.log("La mail non è registrata");
    }


