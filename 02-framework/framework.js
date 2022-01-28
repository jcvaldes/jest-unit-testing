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
module.exports = {
  expect,
  it,
};
