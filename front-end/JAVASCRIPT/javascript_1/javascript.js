/* var hola = "saludo" es igual a hola = "saludo"*/

 let pc = {
 	
 	nombre: "DaltoPC",
 	procesador: "Intel Core i7",
 	ram: "16gb",
 	espacio: "1tb"

 };

let pc2 = ["carmelita", "Intel Core i7", "16gb", "1tb"];

document.write(pc2[0])

let numero = 0; 

while ( numero < 20){

	numero += 1;
	document.write(`<div><p>${numero}</p></div> `);

}
 

let animals = [ "cat", "dog", "tyrannosaurus rex"]

for ( animal of animals ){
    document.write(animal + "<br>");
} 

/********************************************************************************/

array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio: /* esto es un label - sentencia label */

for(let array in array2){
	
	if(array == 2){

		for(let array of array1){
			
			document.write(array + "<br>");
			break forRancio; /* podemos romper el bucle principal usando la sentencia */
		}

	}else{
		document.write(array2[array] + "<br>");
	}

}

/********************************************************************************/


/*

4) Variables

- Concepto
- Ejemplo
- Tipos de datos: String ( Cadena de texto ), Number, Boolean, Symbol ) 
- Casos especiales de datos: Undefined, Null, Nan; ( IMG )
- Scope
- Hoisting
- Tipos de Variables ( Let, Var y Const )
- Crear multiples variables ( Separandolas con coma ) -> Let nombre1 = "Jorge", nombre2 = "pedro"
- Pruebas con Prompt

var, let, const, let y const aparecieron en Ecmascript6

var hola = "texto";
let nombre = " caruto ";
const apellido = " curito "


let nombre; <-- declarar
nombre = "hola" <-- inicializar

let numero = null; <-- it means vacio;

NaN = Not a Number;

let nos limita el alcance de la variable al bloque en el que la ejecutamos

5) Operadores en Javascript

- Operadores de Asignacion ( IMG )
- Operadores Aritmeticos ( IMG )

6) Concatenacion

- Definicion y ejemplo
- Con el signo +
- Para numeros forzamos string("" + 9 + 4 )
- Con concat
- Con backtik y la variable entre ${}

7) Concatenacion( Bloquote o Acento Grave) y escape

- Sin backticks: "Linea 1\n\
						linea 2"
- Con backticks: ```` linea 1
						linea 2`

- Definicion
- Escape de comillas simples
- Escape de comillas dobles

8) Operadores ( intermedio )

- Operadores de Comparacion: Comparan dos expresiones y devuelven un valor Boolean que representa la relacion de sus valores

=== son estrictamente iguales ? - incluye tipo de datos
== no diferencia de los tipos de datos "23" y "hola" ambos son cadenas de texto
 
- Operadores Logicos: se basan en los operadores de comparacion

9) Camel Case

- Definicion
- Usos
- Ejemplo
---------------------------------------------------------------------
10) Condicionales

- Definicion y usos
- If
- Else If
- Else

nombre = "pedro";

if(nombre =="lucas"){

	alert("Tu nombre es malardo");
	
}

if (nombre =="dalto"){
	
	alert("tu nombre es malardo");

}

********************

if(nombre =="lucas"){

	alert("Tu nombre es malardo");
	
}

else if(nombre == "dalto"){
	alert("Tu nombre es buenardo")
}
-----------------------------------------------------------------------

*/



/*
function hello(name){
  let phrase = `hello ${name} , how's it going ?`;
  document.write(phrase)
}

hello("John")

*/





function mayor_edad(invitado_edad){

	if ( invitado_edad >= 18 ){

		alert("Muy bien, tienes la edad necesaria")

		} else { alert("Disculpe, usted no tiene la edad necesaria para ingresar") }

}

function hora_de_entrada(hora_entrada){

	if ( hora_entrada >= 2 && hora_entrada < 7){

		alert(`Son las ${hora_entrada}:00 am, a esta hora la entrada es gratis, puedes pasar, diviertete!`);
	}

}

function main(){

let invitado_edad = prompt("cual es tu edad ?");
let hora_entrada = prompt("que hora es?");

mayor_edad(invitado_edad);
hora_de_entrada(hora_entrada);

}

main();






/*


let free = false;      //no entiendo porque el declaro esta variable aqui, pero parece un metodo de seguridad 

const validarCliente = ( time ) =>{

    let edad = prompt("cual es tu edad?");
    if(edad >= 18){
        if(time >= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis porque eres la primera persona despues de las 2 am")
        free = true;
   } else {
        alert(`son las ${time}:00hs y puedes pasar, pero tienes que pagar la entrada`); } } else {
    alert(" eres menor de edad y no puedes pasar ");
}
}

validarCliente(8);
validarCliente(2);
validarCliente(1);   */