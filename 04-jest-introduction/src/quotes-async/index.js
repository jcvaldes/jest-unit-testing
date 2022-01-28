export const getQuote = () => {
  return "No creas todo lo que leas en internet, por Benjamin Franklin";
};
// callback
export const getQuoteCb = (cb) => {
  setTimeout(
    () => cb("No creas todo lo que leas en internet, por Benjamin Franklin"),
    1000
  );
};

// promesa
export const getQuoteProm = (id = 1) => {
  return new Promise((resolve, reject) => {
    if(id === 2) { 
      reject('Error generado intencionalmente');
    } else {
      setTimeout(() =>
        resolve("No creas todo lo que leas en internet, por Benjamin Franklin"),
        1000
      );
    }
  });
};
