let descuento = 0.18;
console.log(typeof descuento);
let costo = 1560;
let resultadodesc = parseFloat(costo) * parseFloat(descuento);
let resta= parseFloat(costo) - parseFloat(resultadodesc);
alert ("El covtro real de abrigo es: " + costo);
alert ("El desceunto del -18%: " + resultadodesc);
alert ("El costo del abrigo con desceunto es: " + resta);

// En caso de que el descuento fuese del 10%, solo cambiamos el valor de la variable descuento =0.10