import { getRandomNumberFact } from ".";
import { getRandomNumberFactService } from "./service";
// reemplaza todos las funciones que haya en service por un mock
jest.mock("./service");
beforeEach(() => {
  getRandomNumberFactService.mockClear();
});
// sin mock no va a andar
// test("should return a random number fact sin mock", async () => {
//   const numberFact = await getRandomNumberFact();

//   expect(numberFact.text).toBe(
//     "158 is the year that the earliest dated use of Sol invictus, in a dedication from Rome."
//   );
// });
test("should return a random number fact", async () => {
  // implemento text attribute
  getRandomNumberFactService.mockReturnValueOnce({
    text: "158 is the year that the earliest dated use of Sol invictus, in a dedication from Rome.",
  });
  const numberFact = await getRandomNumberFact();

  expect(numberFact.text).toBe(
    "158 is the year that the earliest dated use of Sol invictus, in a dedication from Rome."
  );
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
});
test("should return an error when the service throws an exception", async () => {
  getRandomNumberFactService.mockReturnValueOnce(
    new Error("Something went wrong")
  );
  const numberFact = await getRandomNumberFact();

  expect(numberFact).toBeInstanceOf(Error);
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
});
