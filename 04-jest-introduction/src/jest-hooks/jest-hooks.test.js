beforeAll(() => {
  console.log("antes de todas");
});
beforeEach(() => {
  console.log("antes de todas");
});
afterEach(() => {
  console.log("despues de cada una");
});
afterAll(() => {
  console.log("despues de todas");
});
// describe("scopping", () => {
//   beforeEach(() => {
  
//   });
//   it ("caso 1",  () => {

//   })
// })

test("first test", () => {
  console.log("primera prueba");
  expect(true).toBe(true);
});
test("second test", () => {
  console.log("segunda prueba");
  expect(true).toBe(true);
});
