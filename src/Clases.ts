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
