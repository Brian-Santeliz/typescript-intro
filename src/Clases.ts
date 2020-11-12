/* Progrmacion orientada a objetos en TypeScipt. */
class Universidad {
  // private nombre: string;
  // private estudiantes: number; //atributos publicos
  constructor(protected nombre: string, private estudiantes: number) {}
  get getStudentes(): void {
    return console.log(this.estudiantes);
  }
  set agregarEstudiante(estudiante: number) {
    this.estudiantes = estudiante;
  }
  get getNombre() {
    return this.nombre;
  }
  set modificarNombre(nombre: string) {
    this.nombre = nombre;
  }
}
// Se genera un nuevo tipo
const universidad = new Universidad("Universidad del Cool", 2000);
/* Metodo GET */
universidad.getStudentes;
universidad.agregarEstudiante = 3; //Metodo SET
// universidad.modificarNombre = "Ejemplo2";
console.log(universidad.getNombre);

abstract class Auto {
  constructor(
    protected nombre: string,
    protected puertas: number,
    protected modelo: string
  ) {}
}
interface getAutoInfo {
  nombre: string;
  puertas: number;
  modelo: string;
}
type modeloAuto = {
  nombre: string;
  puertas: number;
  modelo: string;
};
class Ferrari extends Auto {
  static nombre: string = "Hola";
  constructor(nombre: string, public readonly puertas: number, modelo: string) {
    super(nombre, puertas, modelo);
  }
  public get getAutoInfo(): modeloAuto {
    const auto: getAutoInfo = {
      nombre: this.nombre,
      puertas: this.puertas,
      modelo: this.modelo,
    };
    return auto;
  }

  public static encenderAuto(nombre: string): string {
    return `Encendiendo el auto ${nombre}`;
  }
}
// const autoFerrari = new Ferrari("Mustan GT", 4, "2020");
// console.log(autoFerrari.getAutoInfo);
// console.log(autoFerrari.("mustang"));
console.log(Ferrari.nombre);
