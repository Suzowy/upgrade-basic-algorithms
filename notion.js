"use strict";
//interaccion#1: variables
//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
//1.2 Crea una variable llamada x, asigna el valor 50 a ella.
//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

let myFavoriteHero = 'Hulk';
//let x = 50;
//let h = 5;
//let y = 10;
//let z = h + y;

//interaccion#2: variables avanzadas
//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age = 27;
console.log(character);

//1.2 Declara 3 variables con los nombres y valores siguientes 
//firstName = 'Jon'; 
//lastName = 'Snow'; 
//age = 24; 
//Muestralos por consola de esta forma: 
//'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

let firstName = 'Jhon ';
let lastName = 'Snow ';
let age= 24;
console.log( 'soy ' + firstName + lastName + 'tengo ' + age + ' y me gustan los lobos.');

//1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.
//const toy1 = {name: 'Buss myYear', price: 19};
//const toy2 = {name: 'Rallo mcKing', price: 29};

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcking', price: 29};
console.log('La suma del precio de ' + toy1.name +  ' y ' + toy2.name +  ' es :' + (toy1.price + toy2.price));
  
//1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
//y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log(car1);
console.log(car2);

//Iteración#3: Operadores
//1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.
//1.2 Divide 10 por 2 y muestra el resultado en un alert.
//1.3 Muestra mediante un alert el resto de dividir 15 por 9.
//1.4 Usa el correcto operador de asignación que resultará en x = 15, 
//teniendo dos variables y = 10 y z = 5.
//1.5 Usa el correcto operador de asignación que resultará en x = 50,
//teniendo dos variables y = 10 y z = 5.

let multi = (10 * 5);
console.log(multi)

let div = (10 / 2);
console.log(div)

let div2 = (15/9);
console.log(div2)

let y = 10;
let z = 5;
let x = (z + y);
console.log(x)

let y = 10;
let z = 5;
let x = (z * y);
console.log(x)


