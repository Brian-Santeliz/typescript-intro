"use strict";
var miMascota;
miMascota = "dog";
console.log(miMascota);
var ejemplo;
ejemplo = [1, "2", true];
var frutas = ["Banana", "Manzana", "Pera", "Uvas"];
var numeros = [2, 2, 3343];
var numeros2 = [3, 4, 5, 6];
console.log("hola");
//Array Methodw
var resultado = numeros2.reduce(function (prev, actual) {
    return prev + actual;
}, 0);
console.log(resultado);
frutas.map(function (fruta, indice) {
    console.log("estoy en la fruta " + fruta + " del indice:" + indice);
});
var Hola = function (name) {
    console.log("Welcome to TypeScript! " + name);
};
Hola("Brian");
var Saludar = /** @class */ (function () {
    function Saludar(name) {
        if (name) {
            this.nombre = name;
            return;
        }
        this.nombre = "Anonimo";
        return;
    }
    Saludar.prototype.bienvenida = function () {
        return "Bienvenido a TypeScript " + this.nombre;
    };
    return Saludar;
}());
var saludo = new Saludar("Brian").bienvenida();
console.log(saludo);
//# sourceMappingURL=intro.js.map