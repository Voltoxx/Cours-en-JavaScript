let tableau = ["Gestion des cookies", "Politique de confidentialité", "Oe c Greg"]
let footer = document.getElementsByTagName("footer")[0]
let ulfooter = document.createElement("ul")
for(let i = 0; i < tableau.length; i++){
    let lifooter = document.createElement("li")
    let afooter = document.createElement("a")
    afooter.textContent = tableau[i]
    afooter.setAttribute("href", tableau[i].toLowerCase() + ".html")
    lifooter.appendChild(afooter)
    ulfooter.appendChild(lifooter)
}
footer.appendChild(ulfooter)
