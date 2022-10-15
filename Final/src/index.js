import { teatros } from "./teatros";

const availableTeatros = Object.keys(teatros);
const targetTeatro = prompt(
  `¿En que teatro quiere comprar su boleta? ${availableTeatros}`
);

if (availableTeatros.includes(targetTeatro)) {
  const quantityAsText = prompt("¿Cuántas boletas quiere comprar?");
  const quantity = parseInt(quantityAsText);
  const teatro = teatros[targetTeatro];
  const label =
    quantity > 1 ? teatro.ticketPluralLabel : teatro.ticketSingularLabel;
  const dia = prompt("¿Para que día deseas comprar tu función?");
  const jornada = prompt("¿Deseas comprar tu función en horario am o pm?");
  const localidad = prompt(
    "¿Deseas comprar tu función en general o preferencial"
  );
  const cineco = prompt("¿Compras con Cineco, si ó no?");

  if (
    dia !== "miercoles" &&
    jornada === "am" &&
    localidad === "preferencial" &&
    cineco === "si"
  ) {
    const total =
      teatro.unitPriceGeneral *
      teatro.descPriceAm *
      teatro.unitPricePreferencial *
      teatro.descPriceCineco *
      quantity;
    alert(
      `El precio a pagar por ${quantity} ${label} en ${targetTeatro} es: $ ${total}`
    );
  } else if (jornada === "am") {
  } else {
    const total = teatro.unitPriceGeneral * quantity;

    alert(
      `El precio a pagar por ${quantity} ${label} en ${targetTeatro} es: $ ${total}`
    );
  }
} else {
  alert("Teatro Incorrecto");
}
