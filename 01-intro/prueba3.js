const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar("Juan"));

function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
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
  expect(saludar("Juan")).toBe("Hola Juan");
});
