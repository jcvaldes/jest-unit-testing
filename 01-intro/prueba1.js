function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);

console.log({ result });

// function test() {
//   const expected = 4;
//   const result = sum(1, 3);
//   if (result === expected) {
//     return console.log("success");
//   }
//   console.error(`error: expected: ${expected}, result: ${result}`);
// }
// test();

// mas generico
function test(a, b, expected) {
  const result = sum(a, b);
  if (result === expected) {
    return console.log("success");
  }
  console.error(`error: expected: ${expected}, result: ${result}`);
}
test(3, 4, 8);

// si tuviera que testear esta funcion necesito abstraerme mas aun y
// vamos a ver como jest permite  hacer esta abstracción.
// function cube(a) {
//   return a * a * a;
// }
