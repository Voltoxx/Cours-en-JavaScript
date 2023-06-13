//Exercice 1

// let p = document.getElementsByTagName("p")

// function Isred(){
//     for(i = 0; i < p.length; i++){
//         p[i].style.color = "red"
//     }
// }

// function Isblue(){
//     for(i = 0; i < p.length; i++){
//         p[i].style.color = "blue"
//     }
// }

// function Isgreen(){
//     for(i = 0; i < p.length; i++){
//         p[i].style.color = "green"
//     }
// }

//Exercice 2

// var heureDiv = document.querySelector('.heure');

// var affichageHeure = function(){

//     var today, heures, minutes, secondes, deuxChiffres;
//     today = new Date();

//     deuxChiffres = function(element){
//         if(element < 10){
//             return element = "0" + element;
//         } else {
//             return element;
//         }
//     }

//     heures = deuxChiffres(today.getHours());
//     minutes = deuxChiffres(today.getMinutes());
//     secondes = deuxChiffres(today.getSeconds());

//     heureDiv.textContent = heures + ":" + minutes + ":" + secondes;
//     setTimeout(affichageHeure, 1000);
// }

// affichageHeure();

//Exercice 3

// let bouton = document.createElement("button")
// bouton.textContent = "Cliquez ici"
// bouton.setAttribute("onclick", "creerDiv()")

// function creerDiv(){
//     let div = document.createElement("div")
//     div.textContent = "Bonjour"
//     document.body.appendChild(div)
// }

// document.body.appendChild(bouton)

//Exercice 4

// let input = document.createElement("input")
// input.setAttribute("type", "text")
// input.setAttribute("id", "input")
// document.body.appendChild(input)

// let bouton = document.createElement("button")
// bouton.textContent = "Ajouter"
// bouton.setAttribute("id", "ajouter")
// bouton.setAttribute("onclick", "ajouter()")
// document.body.appendChild(bouton)

// let liste = document.createElement("ul")
// document.body.appendChild(liste)

// function ajouter() {
//     const itemText = input.value;
//     if (itemText) {
//         const listItem = document.createElement('li');
//         listItem.textContent = itemText;
//         listItem.addEventListener('click', supprimer);
//         liste.appendChild(listItem);
//         input.value = '';
//     }
// }

// function supprimer() {
//     this.parentNode.removeChild(this);
// }

// bouton.addEventListener('click', ajouter);

// input.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//     ajouter();
//     }
// });

//Exercice 5





