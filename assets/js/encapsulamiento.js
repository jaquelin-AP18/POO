/**Encapsulamiento:Es como una especie de esconder los atributos para que no se puedan acceder desde afuera de la clase 
Su propósito es que nadie se meta donde no le llaman, cada objeto es responsable de su propia información, estados los cuales solo pueden ser modificados por sus propios métodos, por lo cual sus atributos internos no tienen que ser accesibles desde fuera.
*/

//Declaramos nuestra clase que lleva por nombre Pokemon
class Pokemon
{
    //Listamos nuestros atributos (propiedades) de manera privada usando #
    #name="";
    #type="";
    #evolutions=[]; 

    //el constructor sirve para rellenar nuestro objeto
    constructor(name,type,evolutions)
    {
        /*
            Se utiliza "this" para hacer referencia al propietario de la función que la está invocando o en su defecto, al objeto donde dicha función es un método.
        */
        // Se utilizan los métodos propios de la clase 
        // para modificar sus atributos.
        this.#name=name;
        this.#type=type;
        this.#evolutions=evolutions;
    }

        /*
        En JavaScript podemos utilizar la propiedad llamada "set" la cual permite definir un método que solo recibe un parámetro y nunca tiene retorno, en este ejemplo nos permite modificar  los atributos de la clase.
        */
        set name(value) 
        {
            this.#name = value;
        }
    
        set type(value) 
        {
            this.#type = value;
        }
    
        set evolutions(value)
        {
            this.#evolutions = value;
        }

        /*
        En JavaScript podemos utilizar la propiedad llamada "get" la cual nos permite definir un método que no recibe parámetros y siempre tiene retorno, en este ejemplo nos permite consultar los atributos de la clase.
        */
        get name() 
        {
            return this.#name;
        }

        get type() 
        {
            return this.#type;
        }

        get evolutions() 
        {
            return this.#evolutions;
        }


        /*
        Listado de  los mêtodos de la clase, dichos metodos constan de logica propia de la clase.
        */
        attack() 
        {
            // mostramos un mensaje se utuliza ` para poder
            // utilizar literalString.
            return `${this.#name}, esta atacando`;
        }

        evolve(evolution=0)
        {
            // Validamos que la opción exista
            const EVOLVE=this.#evolutions[evolution]||"";
            let message = "No puedo evolucionar";

            /* Si EVOLVE es diferente a "" cambiamos el nombre
            del pokemon y mostramos un mensaje indicando la
            evolución. */
            if (EVOLVE) 
            {
                message = `${this.#name} esta evolucionando a ${EVOLVE}`;
                this.#name = EVOLVE;
            }

            // mostramos un mensaje
            return message;
        }
}

// Creamos una instancia para charmander
const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);

// Creando instancia para Squirtle
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

/*
    Para llamar a un atributo o metodo de la cual quiera de las 
    instancias creadas, se utilizan la sintaxis.
    [Nombre de la instancia].[Nombre del método](); 
    [Nombre de la instancia].[Nombre del atributo]; 
*/

//Imprimimos los datos de  Charmander
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));



//Imprimimos los datos de Squirtle
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));

//
let parr=document.createElement('p')
parr=document.write(`${Charmander.name} es de tipo ${Charmander.type} ${Charmander.attack()}`);
