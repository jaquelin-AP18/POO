/**
La abstracción consiste en captar las características y funcionalidades que un objeto desempeña 
y estos son representados en clases por medio de atributos y métodos de dicha clase.
 */

class Pokedex
{
    getInfo(name)
    {
        
            // Se realizan cambios para conseguir la data desde la API.
            fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
            .then(data=>data.json())
            .then(data=>
            {
                //Desestructuración permite sacar elementos de un arreglo y asignarlos a una varible
                // buscamos la data referente al Pokémon
                const [DATA = null] = data;
                // Decidimos que mensaje mostrar
                const MESSAGE = DATA || `El pokémon ${name} no existe`;
                //Imprimimos el mensaje
                console.log(MESSAGE);

                
            })

    }
    
}

// Creamos la instancia de la clase "Pokedex"
const POKEDEX = new Pokedex();

// Solicitamos la data de charmander
POKEDEX.getInfo("charmander");


