const { expect, it } = require("./framework");
const { saludar } = require("./app");

console.log(saludar("Juan"));

it("La funcion saluda", () => {
  expect(saludar("Juan")).toBe("Hola Juan");
});
