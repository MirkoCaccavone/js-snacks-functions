/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con la lettera A*/

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// function (nomi, lettera){
//     let iniziali = [];
//     for(let i = 0; i < names.length; i++){
//         if(nomi[i].charAt(0) === lettera){
//             iniziali.push(nomi[i]);
//         }
//     }
//     return iniziali;

// }

function arrayWithSpecificFirstLetter(nomi, lettera){
    let specificNames =[];
    for(let i = 0; i < names.length; i++){
        
        if(nomi[i].charAt(0) === lettera){
            specificNames.push(nomi[i]);
        }
    }
    return specificNames;
}


// Invoca la funzione qui e stampa il risultato in console delle parole che iniziano con la lettera A

console.log(arrayWithSpecificFirstLetter(names, 'A'));





//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]