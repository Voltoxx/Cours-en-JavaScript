let tab = ["Accueil", "Exercices", "Contact"]
let nav = document.getElementsByTagName("nav")[0]
let ul = document.createElement("ul")
for(i = 0; i < tab.length; i++){
    let li = document.createElement("li")
    let a = document.createElement("a")
    a.textContent = tab[i]
    a.setAttribute("href", tab[i].toLowerCase() + ".html")
    li.appendChild(a)
    ul.appendChild(li)
}
let logo = document.createElement("img")
logo.setAttribute("src", "Unofficial_JavaScript_logo_2.svg.png")
logo.setAttribute("alt", "logo")
nav.appendChild(logo)
nav.appendChild(ul)
