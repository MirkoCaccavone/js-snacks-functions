/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
in base all'orario aggiornato sul dispositivo dell'utente.
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto(nome){
    const date = new Date();
    const hours = date.getHours();
    let saluto = "";
    
    if(hours < 13){
        saluto = "Buongiorno";

    }else if(hours < 18){
        saluto = "Buon pomeriggio";

    }else{
        saluto = "Buonasera";
    }

    return saluto +" "+ nome;
    // return `${saluto} ${nome}`;
    
}



// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(name));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.