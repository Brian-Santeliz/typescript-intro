let age: number = 20;
let firtName: string = "Brian";
let progamming: boolean = true;
interface adress {
  country: string;
  state: string;
  code: number;
  saludar(): void;
}
let adress: adress = {
  country: "Venezuela",
  state: "Trujillo",
  code: 123,
  saludar() {
    console.log("Hola");
  },
};
let programmingLanguaje: Array<string> = [
  "Javascript",
  "Python",
  "Php",
  "TypeScript",
];

let webDeveloper: boolean = true;
let greeting = function (): void {
  console.log("Hola mi nombre es", firtName);
};
interface Random {
  random: number;
}
const useGetRandom = (): Random => {
  return {
    random: Math.random(),
  };
};

//Typos de datos TS
type ejemplo = {
  name: string;
};
const typeEjemplo: ejemplo = {
  name: "hola",
};
class Tipos {
  //Puede ser accedido desde fuera y dentro de la clase
  public hola() {
    console.log("Hola Mundo");
    this.retorno();
  }
  // Puede ser accedido en la misma clase y en herencias de otroas, pero no en los metodos
  protected retorno() {
    console.log("Hola admin");
  }
  //Puede ser accedida solo dentro de la clase
  private despedida() {
    console.log("Hola mundo desde la misma clase");
  }
}
const tipos = new Tipos().hola();

class TypeScript extends Tipos {
  ejecucion() {
    this.retorno();
  }
}
const resul = new TypeScript().ejecucion();

interface Cliente {
  nombre: string;
  edad: number;
  sexo?: string;
  isPrograming?: boolean;
  favoriteBooks?: Array<string>;
}
interface Ejemplo {
  edad?: number;
  nombre?: string;
  sexo?: string;
  isPrograming?: boolean;
  favoriteBooks?: Array<string>;
}
const useGetClientes = (cliente: Cliente): Array<Ejemplo> => {
  const ejemplo: Ejemplo = {};
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
const Brian: Cliente = {
  nombre: "Brian",
  edad: 20,
  favoriteBooks: ["La teoria del todo", "Sapiens"],
  isPrograming: true,
  sexo: "Masculino",
};
const getClientesResult = useGetClientes(Brian);
console.log(getClientesResult);
const nuevaFn = (nombre: string, edad: number = 20): string | undefined => {
  return `${nombre} - ${edad}`;
};
console.log(nuevaFn("Brian Jose", 340));

type brian = string;

const nuevoTipo = function (nombre: brian): brian {
  return nombre;
};
console.log(nuevoTipo("brian"));
interface Compisicion<tipo> {
  nombre: string;
  unico: tipo;
}
/* Se pueden componer tipos usando interfaces y genericos */
type nuevoTipo = Compisicion<boolean>;
type nuevoTipo2 = Compisicion<string>;
let hola: nuevoTipo;
let nuevo2: nuevoTipo2;

interface Generico<tipo> {
  nuevaPropiedad: tipo;
}
/* Composicion de interfaces */
let nuevoTipo3: Compisicion<Generico<string>>;
// nuevoTipo3.unico.nuevaPropiedad

function ejemploDeBoolean(condicion: boolean): boolean {
  let resultado: boolean;
  if (condicion) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

console.log(ejemploDeBoolean(false));
