export function mostratDecoradores(clase: any) {
  for (let propiedades in clase.prototype) {
    console.log(propiedades);
  }
}
