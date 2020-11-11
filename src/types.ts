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
}
const useGetClientes = (cliente: Cliente): Ejemplo => {
  const ejemplo: Ejemplo = {};
  if (cliente.edad > 18) {
    ejemplo.edad = cliente.edad;
    ejemplo.nombre = cliente.nombre;
    if (cliente.sexo) {
      ejemplo.sexo = cliente.sexo;
    }
  }
  return ejemplo;
};
const Brian: Cliente = {
  nombre: "Brian",
  edad: 20,
};
const getClientesResult = useGetClientes(Brian);
console.log(getClientesResult);
