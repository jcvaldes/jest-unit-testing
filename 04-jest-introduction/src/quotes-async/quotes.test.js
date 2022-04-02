import { getQuote, getQuoteCb, getQuoteProm } from "./index";

// callbacks
// promesas
// async/await
test("getQuote", () => {
  const quote = getQuote();

  expect(quote).toBe(
    "No creas todo lo que leas en internet, por Benjamin Franklin"
  );
});
test("getQuoteCb devuelve un Callback", (done) => {
  getQuoteCb((quote) => {
    expect(quote).toBe(
      "No creas todo lo que leas en internet, por Benjamin Franklin"
    );
    done();
  });
});

test("getQuoteProm ejecuta una Promesa y devuelve resolve", () => {
  // return getQuoteProm().then((quote) => {
  //   expect(quote).toBe(
  //     "No creas todo lo que leas en internet, por Benjamin Franklin"
  //   );
  // });

  //arrange y act
  const prom = getQuoteProm();
  // assert
  return expect(prom).resolves.toBe(
    "No creas todo lo que leas en internet, por Benjamin Franklin"
  );
});
test("getQuoteProm con Promesa y devuelve reject", () => {
  // getQuoteProm(2).catch((err) => expect(err));
  return expect(getQuoteProm(2)).rejects.toMatch(
    "Error generado intencionalmente"
  );
});

test("getQuoteProm con Promesa y async await", async () => {
  const quote = await getQuoteProm();
  expect(quote).toBe(
    "No creas todo lo que leas en internet, por Benjamin Franklin"
  );
});
