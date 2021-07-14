var nome = prompt('Inserisci il tuo nome: ');
var cognome = prompt('Inserisci il tuo cognome: ');
var colore = prompt('Inserisci il tuo colore preferito: ');

console.log(nome);
console.log(cognome);
console.log(colore);

document.getElementById("password").innerHTML = "Ciao "+ nome + " questa è la tua password " + nome + cognome + colore + "21";

console.log(nome + cognome + colore + "21");