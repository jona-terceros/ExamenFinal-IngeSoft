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
});
