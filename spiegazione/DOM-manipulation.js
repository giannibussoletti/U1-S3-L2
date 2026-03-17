// DOM MANIPULATION
// Dopo aver capito quali sono le tecniche principali per recuperare elementi nella pagina,
// vediamo ora come è possibile interagire con loro per cambiarne i contenuti, i connotati visivi etc.

// COME MODIFICARE IL CONTENUTO TESTUALE DI UN ELEMENTO
// devo lavorare sulla proprietà innerText dell'elemento recuperato (esiste  anche "textContent")

const mainTitle = document.getElementById("first-title-main")
console.log(mainTitle)
// ne cambio il testo tramite la proprieta .innerText
console.log(mainTitle.innerText)
mainTitle.innerText = "Questo è il nuovo titolo!" // cambiando la proprietà innerText cambio il contenuto

const formButton = document.querySelector("#newsletter-form button")
console.log(formButton)
formButton.innerText = "CLICCAMI"

// con innerText andiamo a modificare tutto il contenuto testuale che c'è
// tra i tag di apertura e chiusura -> <button>TESTO MODIFICABILE</button>

// COME MODIFICARE IL CONTENUTO HTML DI UN ELEMENTO

const navUl = document.getElementById("nav-links")
console.log(navUl)
// si può interagire con il contenuto HTML di un elemento con "innerHMTL"
console.log(navUl.innerHTML)
// vado a modificare direttamente l'HTML  della pagina inniettando nuovo codice
navUl.innerHTML = "<li>GENERATO CON JS</li>"
navUl.innerHTML = `
<li>Primo Elemento</li>
<li>Secondo Elemento</li>
<li>Terzo Elemento</li>
`
// se invece di sostituire interamente, volessi aggiungere dell'HTML?
navUl.innerHTML += `<li>quarto Elemento</li>`
// essendo JS per aggiugnere si usa sempre il += che equivale in questo caso a;
// navUl.innerHTML = navUl.innerHTML + `<li>quarto Elemento</li>`

// COME MOFICARE E AGGIUNGERE CSS AD UN ELEMENTO

const navTitle = document.getElementById("title-p")
// le classi dell'elemento sono a disposizione nella proprietà "classList"

navTitle.classList.add("text-red") //questo aggiunge la classe text-red all'elemento con l'id title-p
// in cui possiamo lavorare nel file css
navTitle.classList.add("text-start") // .add  aggiunge la classe text-start all'elemento con l'id title-p
navTitle.classList.remove("text-start") // .remove toglie la classe text-start all'elemento con l'id title-p
navTitle.classList.contains("text-red") // .contains controlla se quella class CSS è già esistente ritorna una valore booleano di TRUE o FALSE

// ASSEGNARE/RIMUOVERE stili inline agli elementi
navTitle.style.border = "3px solid #fff" // dopo style si richiamerà direttamente lo stile CSS da modificare non si usano .add, .remove o simili

//CAMBIARE GLI ATTRIBUTI DI UN TAG
const logoImg = document.getElementById("logo-epicode")
// se volessi cambiare per esempio il src
// si usa .getAttribute("attributo") per ottenere cosa quell'attributo ha al suo interno
logoImg.getAttribute("src")
// con .setAttribute(nomeAttributo, valore) -> modifica l'attributo indicato
//  andando a sostituire il suo contenuto
logoImg.setAttribute("src", "https://placebear.com/100/50")

// CREIAMO DEGLI ELEMENTI DA ZERO
//  Per creare elemnti da zero si usa il metodo createElement()
const newImg = document.createElement("img")

newImg.setAttribute("src", "https://placebear.com/300/300")
newImg.setAttribute("alt", "Big Bear")
// l'elemento è stato creato ma non esiste da nessuna parte
// per inserire un elemento nella pagina ci sono diversi modi;
// quello più semplice è APPENDERLO
// per fare questa cosa bisogna trovare il parent element, in questo caso il main
const main = document.getElementsByTagName("main")[0]
main.appendChild(newImg)

newImg.classList.add("bear-class")

const newP = document.createElement("p")
newP.innerText = "Lorem Ipsum Lorem Ipsum Lorem"

newP.classList.add("big-text")

const formSection = document.getElementById("form-section")
formSection.appendChild(newP)
