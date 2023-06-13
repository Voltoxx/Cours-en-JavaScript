// function somme(a, b) {
//     return a + b;
// }

// function celsiusToFahrenheit(celsius) {
//     return celsius * 9 / 5 + 32;
// }

// function aireRectangle(largeur, longueur){
//     return largeur*longueur;
// }

// function isPair(nombre){
//     if(nombre%2 == 0){
//         return "Ce nombre est pair"
//     }
//     else{
//         return "Ce nombre est impair"
//     }
// }

// function factorielle(nombre){
//     var resultat = 1;
//     for(var i = 1; i <= nombre; i++){
//         resultat *= i;
//     }
//     return resultat;
// }

// function de1a10(){
//     a = 0
//     while(a < 10){
//         ++a
//         console.log(a)
//     }
// }

// function for1a10(){
//     for(i = 1; i <= 10; ++i ){
//         console.log(i)
//     }
// }

// function de10a1(){
//     a = 10
//     while(a > 0){
//         console.log(a)
//         --a
//     }
// }

// function notes(note){
//     switch(true) {
//         case note < 5:
//             console.log("Pas ouf")
//             break;
//         case note >= 5 && note < 10 :
//             console.log("Peu mieux faire")
//             break;
//         case note >= 10 && note < 15 :
//             console.log("Pas mal")
//             break;   
//         case note >= 15 && note < 20:
//             console.log("T'es bon")
//             break;  
//         case note == 20:
//             console.log("Franchement t'es trop fort")
//             break; 
//         default:
//             console.log("Trop haut ou trop bas")
//             break;
//     }
// }

// function sommeTableau(tab){
//     var somme = 0
//     for(i = 0; i < tab.length; i++){
//         somme += tab[i]
//     }
//     console.log(somme)
// }

// function carreAvecEtoiles(){
//     for(i = 0; i < 5; i++){
//         var etoiles = ""
//         for(j = 0; j < 5; j++){
//         etoiles += "*"  
//         }
//         console.log(etoiles)
//     }
// }

// function foundCaractere(string, caractere){
//     compteur = 0
//     for(i=0; i < string.length; ++i){
//         if(string[i] === caractere){
//             ++compteur
//         }
//     }
//     return compteur
// }

// function alea(nombre){
//     alea = Math.floor(Math.random() * 100) + 1;
//     compteur = 0
//     while(alea != nombre){
//         alea = Math.floor(Math.random() * 100) + 1;
//         ++compteur
//     }
//     return compteur
// }

// function mdp(){
//     console.log("Le mdp est : mdp")
//     mdp = window.prompt("Entrez votre mot de passe")
//     do{
//         mdp = window.prompt("Entrez votre mot de passe")
//     } while(mdp != "mdp")
// }

//Pour tester les fonctions 

// Exercice 1
// console.log(somme(nombre1, nombre2))

// Exercice 2
// console.log(celsiusToFahrenheit(nombreAConvertir))

// Exercice 3
// console.log(aireRectangle(largeur, longueur))

// Exerecice 4
// console.log(isPair(nombreAVerifer))

// Exercice 5
// console.log(factorielle(nombre))

// Exercice 6
// de1a10()

// Exercice 7
// for1a10()

// Exercice 8
// de10a1()

// Exercice 9
// notes(noteAVerifier)

// Exercice 10
// sommeTableau(tableauASommer)

// Exercice 11
// carrerAvecEtoiles()

// Exercice 12
// console.log(foundCaractere(chaineDeCaractere, caractere))

// Exercice 13
// console.log(alea(nombre))

//Exercice 14
// mdp()
