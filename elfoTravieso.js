/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía. 
*/


const original = "patrol";
const modified = "pftrol";

function findNaughtyStep(original, modified) {
    if (original.length > modified.length) {
        // El original es mayor, por lo tanto el modificado le falta
        for (let index = 0; index < original.length; index++) {
            if (original[index] != modified[index]) {
                return original[index];
            }
        }
    } else if (original.length < modified.length) {
        // El modificado es mayor, por lo tanto el original le falta
        for (let index = 0; index < modified.length; index++) {
            if (original[index] != modified[index]) {
                return modified[index];
            }
        }
    } else {
        // Son del mismo tamaño
        for (let index = 0; index < original.length; index++) {
            if (original[index] != modified[index]) {
                return original[index];
            }
        }
    }
    // Si no existe diferencia manda una cadena vacia
    return ""
}

const result = findNaughtyStep(original, modified);
console.log(result);
