//DOM Traversing & DOM Manipulation

// DOM = Document Object Model

// II DOM Traversing & Manipulation è la possibilità di
// utilizzare JavaScript per selezionare e manipolare
// strutture del Document Object Model (DOM)

// il DOM è la rappresentazioen ad OGGETTI JAVASCRIPT dei contenuti della pagina
// (titoli, p, ul, li, img, span, ecc.)

// Ma per quale motivo dovrebbe servirci JS nel presentare dei contenuti web? Per:
// - personalizzare i contenuti
// - rendere dinamiche date, messaggi etc.
// - fornire capacità di riconoscere l'utente (es. login)
// - mantenere un "guscio" statico e ri-creare dinamicamente delle sezioni "alla bisogna"

// Ottimo! Quindi, come faccio ad utilizzare JS per manipolare i contenuti HTML&CSS?
// Tramite un processo in 2 FASI:

// 1) DOM TRAVERSING -> attraversamento del DOM per la ricerca degli elementi con cui interagire
// 2) DOM MANIPULATION -> tecniche per alterare/generare/eliminare/modificare i vari contenuti

// --------------
// 1) DOM TRAVERSING (selezione degli elementi nella pagina in JS)
// vediamo da dove partire:
console.log(document)
// document è il documento WEB: il CUORE del DOM. Rappresenta la pagina caricata con questo foglio JS.
// A partire da questo macro-oggetto, noi utilizzeremo delle tecniche e dei metodi per attraversarlo
// e arrivare a selezionare un titolo, un immagine, o un altro elemento in particolare.

// come selzioniamo gli elementi nel DOM? Ci sono vari modi:
// 1) tramite l'ID di un elemento HTML
const title = document.getElementById("main-title") // <-- all'interno delle parentesi va richiamato l'id dell'elemento HTML
console.log("titolo preso con getElementByID", title)

const logo = document.getElementById("logo-epicode")
console.log("titolo preso con getElementByID", logo)

const sbagliato = document.getElementById("un-id-nonesistente")
console.log("titolo preso con getElementByID", sbagliato) // l'ID non esiste e quindi ritorna Null

// 2) tramite la CLASSE degli elementi HTML

const listSpecial = document.getElementsByClassName("special-elements")
// getElementsByClassName torna una COLLEZIONE di elementi (simile adun array!)
console.log("lista presa con getElementsByClassName", listSpecial)
// getElementsByClassName NON TORNA MAI UN EELEMENTO RIFERIMENTO SINGOLO! torna TUTTI gli elementi
// dotati di quella classe sotto forma di "HTMLCollection" (una struttura molto simile ad un array
// dotata di indici/posizioni, ciclabile con i cicli for ma NON dotata di metodi avanzati come map,
// filter, reduce, forEach etc.
const x = document.getElementsByClassName("table") // ritorna sempre un HTMLCollection, anche se l'argomento è singolo
console.log("anche con un singolo elemento il getElementsByClassName ritorna sempre un array", x)

// OCCHIO! la x è un'ARRAY (HTMLCollection) con dentro UN OGGETTO (la tabella!)

const y = document.getElementsByClassName("xxxxxxxxxx")
// y è un ARRAY VUOTO perché la classe xxxxxxxxxx non esiste, ma rimarrà sempre un ARRAY

// le HTMLCollection sono delle strutture SIMILI agli array, ma non dei veri e propri array (mancano
// i metodi avanzati che abbiamo visto ieri); però potete se volete convertire una HTMLCollection in un
// vero e proprio array con lo SPREAD OPERATOR:

const xComeArray = [...x] // un nuovo "guscio" con dentro tutti gli elementi di x

// 3)tramite il NOME del TAG!
const allTheParagraphs = document.getElementsByTagName("p")
console.log("TUTTI I PARAGRAFI", allTheParagraphs)

const allTheMains = document.getElementsByTagName("main")
console.log("ARRAY DEI TAG NAME DELLA PAGINA", allTheMains)
// allTheMains NON È IL TAG MAIN!
// allTheMains[0] È IL TAG MAIN!

// getElementsByTagName torna sempre un HTMLCollection di TUTTI gli elemnti dotati di quel determinato TAG
// i, p, div, li, header, main etc...
// fate SEMPRE attenzione a cosa è un ARRAY e cosa è un OGGETTO
const z = document.getElementsByTagName("stefano") // non esiste <stefano>
// z è un HTMLCollection vuota!

// 4) tramite un SELETTORE CSS
// Questo serve quando l'elemento che volete recuperare non ha magari ID
// o si trova in una posizione scomoda
// come selezioneremmo in CSS il secondo elemento della prima lista non ordinata? "nav ul li:nth-of-type(2)"

const secondLi = document.querySelector("nav ul li:nth-of-type(2)")
console.log("querySelector", secondLi)

// il metodo querySelector permette di riciclare tutte le conoscenze
// dei seletori CSS per recuperare gli elementi del DOM: si usa il selettore CSS;
// se funziona in CSS, funziona in JS.
// se il selettore ha più elementi prende sempre il PRIMO ELEMENTO di quelli che vengono selezionati
// se il selettore non è valido ritorna NULL
// Per selezionare i singoli elementi con classi o id bisogna utilizzare rispettivamente
// il PUNTO(.) per le CLASSI e il CANCELLETTO(#) per gli ID

// 5) PIÙ elementi selezionati tramite un SELETTORE CSS
document.querySelectorAll("nav ul li") // TUTTI i li all'interno della nav

// e) PIÙ elementi tramite un SELETTORE CSS
const allNavLis = document.querySelectorAll("nav ul li") // torna TUTTI GLI <li> dentro le <ul> dentro i <nav>
const allMainUlLis = document.querySelectorAll("#main-ul > li") // tutti gli <li> dentro l'elemento dotato di id "main-u
// la differenza è che querySelectorAll torna SEMPRE un array!
console.log(allMainUlLis)

// querySelectorAll() funziona COME querySelector() ma restituisce sempre un array (una NodeList in realtà)
// colleziona tutti gli elementi che vengono colpiti da un selettore CSS fornito.
// NB -> anche se gli elementi recuperati dal selettore CSS sono UNO SOLO, verrà restituito sotto forma
// di array!

// getElementById, querySelector -> ELEMENTO OPPURE NULL
// getElementsByClassName, getElementsByTagName, querySelectorAl1 -> ARRAY DI ELEMENTI
