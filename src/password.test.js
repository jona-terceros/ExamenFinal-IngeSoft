import password from "./password";

describe("Password", () => {
  it("deberia mostrar el password ingresado", () => {
    expect(password("pass")).toEqual("pass");
  });
  it("deberia contar las palabras de la oracion", () => {
    expect(password("hola")).toEqual(1);
  });
  it("deberia contar las apariciones de las palabras", () => {
    expect(password("pas")).toEqual(1);
  });
  it("prueba con 3 palabras lo toma como una sola", () => {
    expect(password("hola son tres")).toEqual(1);
  });
});
