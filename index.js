//importar componentes con commonjs
/*const sumar = require('./sumar')
const estudiante = require('./estudiante')
const spread = require('./spread')*/
//importar componente sumar en module
//import { sumar, restar} from './sumar.js' 
//importar commonjs colors
var colors = require('colors');
const materias = require('./materias');

//tipos de variables:
//let: variables 
//let a = 10
//let {first_name , last_name} = estudiante
//const: constantes
//const b= 20

//console.log(`nombre: ${first_name}`.america)
//console.log(`La suma de los numeros es: ${sumar(a,b)}`.america)


//recorrido del arreglo
/*materias.forEach(function(materia){
    if(materia.tipo === 'tecnica'){
console.log(`nombre:${materia.nombre}`.america)
console.log(`instructor:${materia.instructor}`.bgBlue)
    }
})*/

//map : metodo de arreglos en es6, crea un arreglo a partir de otro
/*const profesores = materias.map((materia)=>{
    return materia.instructor
})
console.log(profesores)*/

//find: localiza elementos de un arreglo que cumplan cierta condicion

const PHP = materias.find((materia)=>{
    return materia.instructor === "Cristian"
})

console.log(PHP)