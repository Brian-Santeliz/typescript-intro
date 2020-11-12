"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
var age = 20;
var firtName = "Brian";
var progamming = true;
var adress = {
    country: "Venezuela",
    state: "Trujillo",
    code: 123,
    saludar: function () {
        console.log("Hola");
    },
};
var programmingLanguaje = [
    "Javascript",
    "Python",
    "Php",
    "TypeScript",
];
var webDeveloper = true;
var greeting = function () {
    console.log("Hola mi nombre es", firtName);
};
var useGetRandom = function () {
    return {
        random: Math.random(),
    };
};
var typeEjemplo = {
    name: "hola",
};
var Tipos = /** @class */ (function () {
    function Tipos() {
    }
    //Puede ser accedido desde fuera y dentro de la clase
    Tipos.prototype.hola = function () {
        console.log("Hola Mundo");
        this.retorno();
    };
    // Puede ser accedido en la misma clase y en herencias de otroas, pero no en los metodos
    Tipos.prototype.retorno = function () {
        console.log("Hola admin");
    };
    //Puede ser accedida solo dentro de la clase
    Tipos.prototype.despedida = function () {
        console.log("Hola mundo desde la misma clase");
    };
    return Tipos;
}());
var tipos = new Tipos().hola();
var TypeScript = /** @class */ (function (_super) {
    __extends(TypeScript, _super);
    function TypeScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeScript.prototype.ejecucion = function () {
        this.retorno();
    };
    return TypeScript;
}(Tipos));
var resul = new TypeScript().ejecucion();
var useGetClientes = function (cliente) {
    var ejemplo = {};
    if (cliente.edad >= 18) {
        ejemplo.edad = cliente.edad;
        ejemplo.nombre = cliente.nombre;
        ejemplo.isPrograming = cliente.isPrograming;
        ejemplo.favoriteBooks = cliente.favoriteBooks;
        if (cliente.sexo) {
            ejemplo.sexo = cliente.sexo;
        }
    }
    return [ejemplo];
};
var Brian = {
    nombre: "Brian",
    edad: 20,
    favoriteBooks: ["La teoria del todo", "Sapiens"],
    isPrograming: true,
    sexo: "Masculino",
};
var getClientesResult = useGetClientes(Brian);
console.log(getClientesResult);
var nuevaFn = function (nombre, edad) {
    if (edad === void 0) { edad = 20; }
    return nombre + " - " + edad;
};
console.log(nuevaFn("Brian Jose", 340));
var nuevoTipo = function (nombre) {
    return nombre;
};
console.log(nuevoTipo("brian"));
var hola;
var nuevo2;
/* Composicion de interfaces */
var nuevoTipo3;
// nuevoTipo3.unico.nuevaPropiedad
/* BOOLEAN */
function ejemploDeBoolean(condicion) {
    var resultado;
    if (condicion) {
        resultado = true;
    }
    else {
        resultado = false;
    }
    return resultado;
}
console.log(ejemploDeBoolean(false));
/* NUMBERS */
var numberStudente = 3000;
var numberStudenteFn = function (estudiantes) {
    switch (estudiantes) {
        case 1000:
            return console.log("El numero de estudiantes es"), estudiantes;
        case 2000:
            return console.log("El numero de estudiantes es"), estudiantes;
        case 3000:
            return console.log("El numero de estudiantes es"), estudiantes;
        default:
            return console.log("El numero de estudiantes no existe."), estudiantes;
    }
};
var valor = numberStudenteFn(3001);
console.log(valor);
var fecha = new Date();
console.log("La fecha es " + fecha);
/* Binario hexadecimal y Octal*/
var binario = 15;
var hexa = 0xf0d;
var octal = 7;
console.log(binario);
console.log(hexa);
console.log(octal);
/* STRINGS */
var nombre = "Jose ";
var apellido = "Gorila";
var fullName = "" + (nombre + apellido);
console.log(fullName);
/* Especial Types */
// ANY
var anything = 2;
anything = "2";
anything = true;
anything = ["2", 2];
console.log(anything);
//VOID
var ejemplo3 = undefined;
function lenguajeObtener(lenguaje) {
    var mensaje = lenguaje
        ? "Bienvenido al lenguaje " + lenguaje
        : "Programar es divertido!";
    console.log(mensaje);
}
lenguajeObtener();
//NEVER /* Usado para retornar error */
function ejemploError(error) {
    throw new Error(error);
}
// ejemploError("Error en la compilacion de TypeScript");
/* Tipo de dato y representa la ausencia del valor, */
var variableUndefined = undefined;
function retornUndefined() {
    return undefined;
}
// console.log(retornUndefined());
/* Tipo de dato nulo, Representa un valor */
var variableNull = null;
function retornNull() {
    return null;
}
// console.log(retornNull());
/* Aray */
var fruticas = ["Banana", "Manzana", "péra"];
var bananaOnly = fruticas.concat("Guanabana");
var arregloString = [];
/* TUPLAS */
var year = new Date();
var arregloDiferentes = ["Brian", 10, year];
arregloDiferentes.map(function (ejem) { return console.log(ejem); });
console.log((_a = arregloDiferentes[2]) === null || _a === void 0 ? void 0 : _a.getDay());
/* Valores mixto o alias permite agregar más de un tipo de datos.*/
var fecha2 = new Date().getFullYear();
fecha2 = year;
console.log(fecha2);
function saludo2(nombre) {
    if (!nombre)
        return 2020;
    return nombre;
}
// const arregloChaning: (string | number | boolean)[] = [true, 2, "2", "3", true];
//Con un tipo de dato personalizado
var arregloChaning = [true, 2, "2", "3", true];
console.log(arregloChaning);
//# sourceMappingURL=types.js.map