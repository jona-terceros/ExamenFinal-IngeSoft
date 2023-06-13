import contarPalabras from "./password";

describe("Password", () => {
  it("deberia mostrar el password ingresado", () => {
    expect(contarPalabras("pass")).toEqual("pass");
  });
  it("deberia contar las palabras de la oracion", () => {
    expect(contarPalabras("hola")).toEqual(1);
  });
  it("deberia contar las apariciones de las palabras", () => {
    expect(contarPalabras("pas")).toEqual(1);
  });
  it("prueba con 3 palabras lo toma como una sola", () => {
    expect(contarPalabras("hola son tres")).toEqual(1);
  });
  it("prueba intento contar 3 palabras", () => {
    expect(contarPalabras("hola son tres")).toEqual(1);
  });
});
