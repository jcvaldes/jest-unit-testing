const saludar = nombre => `Hola ${nombre}`

console.log(saludar('Juan'));
const resultado = saludar('Juan')
const esperado = 'Hola Juan'

if (resultado === esperado ) {
  console.log('Prueba exitosa');
} else {
  // console.log('Prueba no exitosa');
  // console.error('Prueba no exitosa');
  
  // Tracking error
  throw new Error('Prueba no exitosa')
}