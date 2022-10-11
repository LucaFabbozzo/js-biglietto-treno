// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const prezzoAlKm = 0.21;
const minori = 0.2;
const over = 0.4;
const numeroKmPercorsi = parseInt(prompt('Quanti km vuoi percorrere?'));
const etaPasseggero = parseInt(prompt('Quanti anni hai?'));
const prezzoViaggio = numeroKmPercorsi * prezzoAlKm;
const scontoMinori = prezzoViaggio * minori;
const scontoOver = prezzoViaggio * over;

let prezzoFinale;


if (etaPasseggero < 18) {
 prezzoFinale = prezzoViaggio - scontoMinori;
} else if (etaPasseggero > 65) {
 prezzoFinale = prezzoViaggio - scontoOver;
} else 
 prezzoFinale = prezzoViaggio;


document.getElementById('prezzo').innerHTML = `
  Il prezzo del tuo viaggio :  ${Math.round(prezzoFinale * 100) / 100} €
`;


