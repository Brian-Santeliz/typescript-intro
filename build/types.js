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
//# sourceMappingURL=types.js.map