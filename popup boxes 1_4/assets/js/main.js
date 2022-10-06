// window.alert("Hallo Welt");
// // gibt nur eine "ok" Option
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// //Gibt ein Textfeld, Ok & Abbrechen
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// //Gibt ein Textfeld, Ok & Abbrechen
// window.confirm("Stimmen Sie meiner Meinung zu?");
// //Gibt ein Ok & Abbrechen als Option

// let alter = prompt("Gib mir bitte dein Alter:");
// console.log(alter);

// let b = 5;
// let a = b * 5 - 3;
// alert(a);
// //Das oben stehende a (=22) steht jetzt im Pop up Fenster nach der Altersabfrage

// let mann = "Robert Wadlow ist der größte Mann der Welt : ";
// let grosse = "2,72m";
// alert(mann + grosse);

// // w3schools aufgaben
// alert("Hallo Sofia")
// alert("Hi\nHallo\nWie geht's?")
// alert(location.hostname)

// let text = "Pepsi";
// function myFunction() {
let favDrink = prompt("What's your favorite cocktail drink?")
switch (favDrink) {
    case "Coca-Cola":
        text = "Excellent choice! Coca-Cola is good for your soul."
        break
    case "Pepsi":
        text = "Pepsi is my favorite too!";
        break
    case "Sprite":
        text = "Really? Are you sure the Sprite is your favorite?"
        break
    default:
        text = "I have never heard of that one!"
}
document.getElementById("demo").innerHTML = text;

// }
// confirm("drücke einen Knopf")
// alert("Klicke einen beliebeigen Knopf")
// prompt("Was willst du sagen?")