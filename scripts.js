/*  Crear una función que encuentre el número más repetido en un array.
Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6 */
console.log("Ejercicio 1");
let array = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
let numero = [];

function numeroRepetido(pila) {
  pila.forEach((item) => {
    numero[item] = (numero[item] || 0) + 1;
  });
  console.log("Números de veces repetido", numero);
  let masComun;
  let numeroVeces = 0;
  for (let index = 0; index < numero.length; index++) {
    if (numero[index] > numeroVeces) {
      numeroVeces = numero[index];
      masComun = index;
    }
  }
  return masComun;
}

console.log(
  "El número que mas veces se repite en el arreglo es el:",
  numeroRepetido(array)
);
/*2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
Salida → [‘e’,‘a’,‘d’,‘f’]*/
console.log("Ejercicio 2");

let arregloMixto = [8, "e", 7, 2, "a", "d", "f", 2, 3, 1, 4, 3];
console.log("Arreglo original", arregloMixto);
function ObtieneLetras(arreglo) {
  let arregloLetras = [];
  arreglo.forEach((element) => {
    if (typeof element == "string") {
      arregloLetras.push(element);
    }
  });
  return arregloLetras;
}

console.log(
  "El nuevo arreglo de puras letras es: ",
  ObtieneLetras(arregloMixto)
);
/*3.- Crear una función que busque el número más grande en un arreglo.
Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
Salida -> 12*/
console.log("Ejercicio 3");
let arregloNumeros = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
console.log("Arreglo original: ", arregloNumeros);
function numeroMayor(arreglo) {
  arreglo.sort((a, b) => a - b);
  return arreglo[arreglo.length - 1];
}

console.log(
  "El valor mas grande en el arreglo es: ",
  numeroMayor(arregloNumeros)
);
/* 4.- Crear una función que busque el número más pequeño en el arreglo.
Ejemplo input - > [1,4,5,-1,-7,2,3,9]
Salida -> -7 */
console.log("Ejercicio 4");
let arregloCuatro = [1,4,5,-1,-7,2,3,9];
console.log("Arrgelo original", arregloCuatro);
function numeroMenor(arreglo){
    arreglo.sort((a,b)=>a-b);    
    return arreglo[0];
}
console.log("El número menor en el arreglo es: ", numeroMenor(arregloCuatro));

/* 5.- Crear una clase llamada ``Contacto`` con los siguientes datos:
Nombre
Apellidos
Teléfono
Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
Agregar un contacto.
Buscar un contacto por nombre. */

console.log("Ejercicio 5");
class Contacto {
    constructor(nombre,apellidos,telefono){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}
class ListaContactos {
    constructor(){        
        this.contactos = [];
    }
    agregarContacto(nombre,apellidos,telefono){
        let contacto = new Contacto (nombre,apellidos,telefono);        
        this.contactos.push(contacto);        
    }
    buscarContacto(nombre){
        return this.contactos.filter(a => a.nombre === nombre);
    }
}

let contacto1 = new ListaContactos();

contacto1.agregarContacto("Rubria","Hernández Méndez","55555555");
contacto1.agregarContacto("Issabella","Hernández Méndez","99999999");
contacto1.agregarContacto("Alma","Méndez Ortíz","88888888");

console.log("Mi lista de contactos: ",contacto1.contactos); 

console.log(`Elcontacto buscado es: `,contacto1.buscarContacto("Issabella")); 


