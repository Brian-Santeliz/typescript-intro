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
