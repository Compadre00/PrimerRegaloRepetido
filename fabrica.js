/* 
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo. 
*/

const gifts = ['tren', 'oso', 'pelota']
const materials = "tronesa"
var VerifingMaterial = [];
const giftsCreated = [];

function manufacture(gifts, materials) {
    for (const currentGift of gifts) {
        let currentGiftLength = currentGift.length;        
        Array.from(currentGift).forEach(
            materialGift => {                
                if (materials.includes(materialGift)) {
                    VerifingMaterial.push(1);                    
                }
            }
        );
            
        if (VerifingMaterial.length == currentGiftLength) {
            giftsCreated.push(currentGift);
        };

        VerifingMaterial = [];
    }
}

manufacture(gifts,materials);
giftsCreated;



