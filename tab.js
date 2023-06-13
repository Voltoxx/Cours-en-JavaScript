let tab = ["Courage", "Force", "Honneteté", "Justice", "Sagesse", "Temperance", "Prudence"]

let liste = document.createElement("ul")

for(i = 0; i < tab.length; i++){
    let item = document.createElement("li")
    item.textContent = tab[i]
    document.getElementsByClassName("ismael")[0].appendChild(item)
}




