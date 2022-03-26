// const calculator = require(".");

import { calculator } from ".";
test("sum calc", () => {
  // Arrange y Act
  const result = calculator.sum(2, 2);

  //Assert
  expect(result).toBe(4);
});

test.todo("substract calc");
test.todo("multiply calc");
test.todo("divide calc");
