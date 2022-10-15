/*index.js:
import { fruits } from "./prices";

const availableFruits = Object.keys(fruits);
const targetFruit = prompt(`¿Qué fruta quiere? ${availableFruits}`);

if (availableFruits.includes(targetFruit)) {
const quantityAsText = prompt("¿Cuántas unidades?");
const quantity = parseInt(quantityAsText);
const fruit = fruits[targetFruit];

const total = fruit.unitPrice * quantity;
const label = quantity > 1 ? fruit.pluralLabel : fruit.label;

alert(`El precio a pagar por ${quantity} ${label} es: $ ${total}`);
} else {
alert("Fruta incorrecta");
}



prices.js:
export let fruits = {
apple: {
unitPrice: 1400,
mass: 0.7,
color: "red",
label: "Manzana Roja",
pluralLabel: "Manzanas Rojas"
},
watermelon: {
unitPrice: 7500,
mass: 5,
color: "green",
label: "Patilla",
pluralLabel: "Patillas"
},
banana: {
unitPrice: 400,
mass: 0.25,
color: "yellow",
label: "Banano",
pluralLabel: "Bananos"
},
lemon: {
unitPrice: 350,
mass: 0.125,
color: "green",
label: "Limón",
pluralLabel: "Limones"
}
};*/