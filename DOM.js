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
console.log("titolo preso con getElementByID", listSpecial)
