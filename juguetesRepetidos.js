/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
*/

const gistList = ["4", "2", "3", "1", "3", "2"];

function getFirstGiftRepeated(gistList) {
    
    const isRepeated = new Set()
    for (const elementList of gistList) {
        if (isRepeated.has(elementList)) {
            return elementList;
        }
        isRepeated.add(elementList);
    }
    return -1;
}

let resultado = getFirstGiftRepeated(gistList);
console.log(resultado);
