import { mostratDecoradores } from "./comparar";

const ejemplo2 = ["eje", "2"];
const ejemploObjeto = {
  nombre: "Brian",
  apelido: "Santeliz",
};
/* FOR OF usado para arreglo y String */
// for (let e of ejemplo2) {
//   // console.log(e);
// }
// /* For IN Usado para recorrer objetos */
// for (let e in ejemploObjeto) {
//   // console.log(e);
// }

/* Tipe Asertion. M-1 */
let cualquierCosa: any = " cualquierCosa";
let numerosPrimeros: number = <number>cualquierCosa;

/* Tipe Asertion. M-2 */
let numerosPrimeros2: number = cualquierCosa as number;

type userParams = {
  username: string;
  email: string;
  password: number;
};

const usuarioLlamada: userParams = {
  email: "Brian@email.com",
  username: "Brian",
  password: 22,
};
const Decorador = (config: any) => {
  console.log(config);
  return (target: any) => {
    target.clave = config.clave;
  };
};

//  Decoradores permite agregar nuevas propiedas a clases y funciones.
// Basicamente es una funcuin que recibe la clase y le asigna la propiedad
@Decorador({
  clave: "curso",
})
class Usuario {
  constructor(private userParams: userParams) {}
  public get obtenerUsuario(): userParams {
    return this.userParams;
  }
}
const instanciaUsuario = new Usuario(usuarioLlamada);

/* Inplementando una interface */
interface ILenguaje {
  _nombre: string;
  _id: number;
}
const Entidad = ({ nombreClase }: any) => {
  return (target: any) => {
    target.nombreClase = nombreClase;
  };
};

const decoradorFuncion = (value: boolean): any => {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void => {
    mostratDecoradores;
    descriptor.enumerable = value;
  };
};
const DecoradorSoloLectura = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  descriptor.writable = false;
  return descriptor;
};
@Entidad({ nombreClase: "Lenguaje desde decorador" })
class Lenguaje implements ILenguaje {
  _nombre: string;
  _id: number;
  constructor(_nombre: string, _id: number) {
    this._nombre = _nombre;
    this._id = _id;
  }
  get id(): number {
    return this._id;
  }
  get nombre(): string {
    return this._nombre;
  }
  set id(id: number) {
    this._id = id;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  @decoradorFuncion(false)
  public metodo() {
    console.log("metodo de la clas");
  }
  @decoradorFuncion(true)
  metodo2() {
    console.log("Metodo 2 de la clase");
  }
  @DecoradorSoloLectura
  metodoDeLectura() {}
}
@Entidad({ nombreClase: "nueva clase" })
class nuevaClase {}
const comprarDecorador = function (clase: any) {
  // console.log(clase);
};
comprarDecorador(nuevaClase);
comprarDecorador(Lenguaje);
const lenguaje = new Lenguaje("Java", 2);
mostratDecoradores(Lenguaje);
/* 
  Metodo de solo lectura
*/
lenguaje.metodoDeLectura = function () {};
