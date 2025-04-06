// Función para imprimir en los <div> por ID mostrando el array antes y después
function imprimir(id, antes, despues) {
    const div = document.getElementById(id);
    div.innerHTML = `
        <strong>Antes:</strong> ${JSON.stringify(antes)}<br>
        <strong>Después:</strong> ${JSON.stringify(despues)}
    `;
}

// 1. .push()
let frutas = ["manzana", "banana"];
let frutasPush = [...frutas]; // copiar antes
frutasPush.push("naranja");
imprimir("push", frutas, frutasPush);

// 2. .pop()
let frutasPop = [...frutasPush];
let eliminadoPop = frutasPop.pop();
imprimir("pop", frutasPush, { eliminado: eliminadoPop, actual: frutasPop });

// 3. .shift()
let frutasShift = [...frutasPop];
let eliminadoShift = frutasShift.shift();
imprimir("shift", frutasPop, { eliminado: eliminadoShift, actual: frutasShift });

// 4. .unshift()
let frutasUnshift = [...frutasShift];
frutasUnshift.unshift("kiwi");
imprimir("unshift", frutasShift, frutasUnshift);

// 5. .sort()
let numeros = [4, 2, 9, 1];
let numerosSorted = [...numeros];
numerosSorted.sort((a, b) => a - b);
imprimir("sort", numeros, numerosSorted);

// 6. .reverse()
let numerosReversed = [...numerosSorted];
numerosReversed.reverse();
imprimir("reverse", numerosSorted, numerosReversed);

// 7. .every()
let edades = [22, 34, 18, 27];
let resultadoEvery = edades.every(edad => edad >= 18);
imprimir("every", edades, resultadoEvery);

// 8. .some()
let resultadoSome = edades.some(edad => edad < 18);
imprimir("some", edades, resultadoSome);

// 9. .find()
let numerosGrandes = [3, 10, 18, 20];
let encontrado = numerosGrandes.find(num => num > 15);
imprimir("find", numerosGrandes, encontrado);

// 10. .findIndex()
let indice = numerosGrandes.findIndex(num => num > 15);
imprimir("findIndex", numerosGrandes, indice);

// 11. .map()
let numerosParaMap = [1, 2, 3];
let dobles = numerosParaMap.map(num => num * 2);
imprimir("map", numerosParaMap, dobles);

// 12. .reduce()
let numerosParaReduce = [1, 2, 3, 4];
let suma = numerosParaReduce.reduce((acum, actual) => acum + actual, 0);
imprimir("reduce", numerosParaReduce, suma);

// 13. .filter()
let numerosParaFilter = [1, 2, 3, 4, 5, 6];
let pares = numerosParaFilter.filter(num => num % 2 === 0);
imprimir("filter", numerosParaFilter, pares);


// Función para imprimir en los div por ID con descripción de lo que se hace
function imprimirJSON(id, descripcion, valor) {
    const div = document.getElementById(id);
    div.innerHTML = `
        <strong>${descripcion}:</strong><br>
        <pre class="pre">${JSON.stringify(valor, null, 2)}</pre>
    `;
}

const usuarioJSON = '[{"nombre": "Ana", "apellidos": "Pérez Gómez", "fechaNacimiento": "2005-06-15"}]';

// 1. Convertir el JSON a un objeto con JSON.parse()
const usuarioObjeto = JSON.parse(usuarioJSON);
imprimirJSON("parse", "JSON.parse() - Convierte el JSON en un objeto", usuarioObjeto);

/* 

ASI ES PARA HACER DE UN JSON PASADO A OBJETO, PODER HACER EL ELEMENTO.CAMPO (DE OTRA MANERA DA ERROR)

usuarioObjeto.forEach(element => {
    console.log(element.nombre)
}); 

*/

// 2. Convertir el objeto a cadena JSON con JSON.stringify()
const jsonString = JSON.stringify(usuarioObjeto);
imprimirJSON("stringify", "JSON.stringify() - Convierte el objeto en cadena JSON", jsonString);
