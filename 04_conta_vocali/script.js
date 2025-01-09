/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countvowels(parola){
    const vowels = ["a", "e", "i", "o", "u"];
    let numbervowels = 0;
    for(let i = 0; i < parola.length; i++){
        if(vowels.includes(parola[i])){
            numbervowels++;
        }
    }
    return numbervowels;

}


// Invoca la funzione qui e stampa il risultato in console
console.log(countvowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)