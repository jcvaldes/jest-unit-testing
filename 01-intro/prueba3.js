const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar("Juan"));

function expect(result) {
  return {
    toBe(expect) {
      if (result !== expect) {
        throw new Error("Prueba no exitosa");
      }
    },
  };
}

function it(title, callback) {
  try {
    callback();
    console.log(`✔ ${title}`);
  } catch (err) {
    console.error(`✖ ${title}`);
  }
}

it("La funcion saluda", () => {
  // arrange
  let result;
  // act
  result = saludar("Juan");
  // assert
  expect(result).toBe("Hola Juan");
});
