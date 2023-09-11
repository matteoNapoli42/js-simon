/* 
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/

let countDownDate = new Date("Sep 11, 2023 09:30:00").getTime();

//1000 millisecondi, unità di misura più piccola che andiamo ad utilizzare
const ms = 1000;

//1000 millisecondi * 60 volte = num di ms che compone un secondo
const msInSec = 1000*60;

//1000 millisecondi * 60 volte * altre 60 volte = num di ms che compone un secondo * altre 60 volte = 1 minuto 
const secInMin = 1000*60*60;

//numero di millisecondi presenti in 24 ore 
const minInHours = 1000*60*60*24;

let x = setInterval(function() {


let oggi = new Date().getTime();

let distance = countDownDate - oggi;
  
  let days = Math.floor(distance / (minInHours));
  let hours = Math.floor((distance % (minInHours)) / (secInMin));
  let minutes = Math.floor((distance % (secInMin)) / (msInSec));
  let seconds = Math.floor((distance % (msInSec)) / ms);

  
  document.getElementById("countdown").innerHTML = days + "d " + + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}
)

