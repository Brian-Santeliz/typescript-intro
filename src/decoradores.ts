const ejemplo2 = ["eje", "2"];
const ejemploObjeto = {
  nombre: "Brian",
  apelido: "Santeliz",
};
/* FOR OF usado para arreglo y String */
for (let e of ejemplo2) {
  // console.log(e);
}
/* For IN Usado para recorrer objetos */
for (let e in ejemploObjeto) {
  // console.log(e);
}

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
