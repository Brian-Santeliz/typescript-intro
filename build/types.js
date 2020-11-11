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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
console.log(resul);
console.log(tipos);
state.map(function (state) {
    return state.id === action.payload
        ?
        :
    ;
    return __assign(__assign({}, state), { complete: !state.complete });
    state;
});
//# sourceMappingURL=types.js.map