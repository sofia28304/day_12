console.log("Hallo Kurs")

// DataType - Primitive Datatypes
//String=Text
console.log("string ist text")
console.log("it works")
console.log("20")

//Zahlen
console.log(20)
console.log(3 + 5)
console.log(3.4 * 2.9)

//Booleans
console.log(true)
console.log(false)

//Variablen var, let, const
//var war einmal aber es geistert noch oft rum
//wir nehmen nur let & const
// declaration & Assignments sind die 2 Abschnitte der Variablen
let num1 = 150
console.log(num1)

const pi = 3.14
console.log(pi)

//reassignment
num1 = 50
console.log(num1)
//man kann num1 also einen neuen Wert zuweisen. Mit const geht das nicht. Siehe Website inspector->console
// pi = 400

let num2 = 40
console.log(num1 + num2)

//camelcase oder lower pascal case
let meinHausIstBunt = "red"


//underscore - sollen wir aber nicht nutzen
let _meinHausIstBunt = "blue"
// $ - sollen wir aber nicht nutzen
let $meinHausIstBunt = "yellow"

// der Name darf nicht mit einer Zahl beginnen
// let 1meinHausIstBunt = "pink"
//alles klein schreiben geht aber wir sollen es auch nicht machen
// let meinhausistbunt = "purple"

//string concatination
let firstName = "Bruce"
let lastName = "Mayer"
const address = "Dorf Gotham"

//Ich bin Bruce Mayer und komme aus Dorf Gotham.
console.log("Ich bin " + firstName + " " + lastName + " und komme aus " + address + ".")

//Übungen

let hero = "Spiderman"
let city = "NYC"
// Ich bin Spiderman und komme aus NYC!
console.log("Ich bin " + hero + " und komme aus " + city + "!")


let mwst = 1.19
let macbook = 1000
// Mein MAcbook hat $$ € gekostet.
console.log("Mein Macbook hat " + mwst * macbook + "€ gekostet.")

// Arithmetik Operatoren
// + - / * %-Modulo

let x = 5
let y = 4
let z = 10
console.log(x + y)
console.log(z - y)
console.log(z / x)
console.log(x * z)
// Modulo - Restwert der Division bis zum nächsten passenden Wert.
console.log(x % y)
console.log(z % x)
console.log(20 % 3)

//Increment & Decrement
// ++ -- Gibt dem vorherigen Wert eine Einheit drauf oder zieht eine ab
console.log(x)
x++
console.log(x)

console.log(z)
z--
console.log(z)

// JS Output 2
//Document write wird fürs testen benutzt
document.write("Hallo Kurs")
document.write("1224")
document.write("<h2>Halihallo</h2>")
document.write("<h2 style='color:red;'>Halihallo</h2>")

// Ein pop up beim laden der Seite - wird nicht mehr so oft benutzt, pop auf bei jedem neu laden der Website
// window.alert("hey hey hey")

//JS Input
// window.prompt("Bitte gib dein Alter an.")
let askAge = window.prompt("Bitte gib dein Alter ein.")
console.log(askAge)
// mit let ask wird das Alter in der Konsole angezeigt.

//Confirm gibt true oder false im Inspektor.
let confirm = window.confirm("Stimmen Sie den Cookies zu?")
console.log(confirm)