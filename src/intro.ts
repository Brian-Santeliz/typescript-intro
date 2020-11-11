
let miMascota: "dog"
miMascota = "dog";
console.log(miMascota)
let ejemplo: [number, string, boolean?]
ejemplo = [1,"2", true]
const frutas: Array<string> = ["Banana","Manzana", "Pera", "Uvas"]
const numeros: number[] = [2,2,3343];
const numeros2: Array<number> = [3,4,5,6]
 
console.log("hola")
//Array Methodw
const resultado = numeros2.reduce((prev:number,actual:number):number=>{
    return prev+actual
},0)
console.log(resultado)
frutas.map((fruta:string, indice:number):void=>{
    console.log(`estoy en la fruta ${fruta} del indice:${indice}`)
})

const Hola = (name:string):void=>{
     console.log(`Welcome to TypeScript! ${name}`)
}

Hola("Brian")

class Saludar{
    nombre:  string 
    constructor(name?:string){
        if(name){
            this.nombre=name
            return
        }
        this.nombre="Anonimo"
        return
    }
    bienvenida():string{
        return `Bienvenido a TypeScript ${this.nombre}`
    }
}
const saludo = new Saludar("Brian").bienvenida()
console.log(saludo)
