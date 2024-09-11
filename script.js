

let score = 0

let choix = prompt("Veuillez choisir la liste : mots ou phrases ")
function choisirPhrasesOuMots(listeMots) {
    while (choix !== "mots" && choix !=="phrases") {
        choix = prompt("Veuillez choisir la liste : mots ou phrases ")
    
    }
        
}


function retournerMessageScoreMots(score, listMots) {
    let message = 'Votre score est de ' + score + ' sur ' + listMots.length
    return message
}
    
function retournerMessageScorePhrases(score, listTableaux) {
    let message = 'Votre score est de ' + score + ' sur ' + listTableaux.length
    return message
}
    
    if (choix === "mots") {
        for (let i = 0 ; i < listMots.length ; i++){
            let premierMot = prompt("Entrer le  mot :\n  " + listMots[i] )
            if (premierMot === listMots[i]) {
               score++
            }
      }
     
     console.log("Votre score de mots est de " + score + " sur" + listMots.length)
  
    }else{
        for (let j = 0 ; j < listTableaux.length ; j++){
            let premierPhrase = prompt("Entrer la  phrase : \n " + listTableaux[j] )
            if (premierPhrase === listTableaux[j]) {
            score++
            }
        }

        console.log("Votre score de phares est de " + score + " sur" + listTableaux.length)
    }


            

           

   








