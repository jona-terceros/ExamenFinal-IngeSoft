import password from "./password";

describe("Password", () => {
  it("deberia mostrar el password ingresado", () => {
    expect(password("pass")).toEqual("pass");
  });
  it("deberia contar las palabras de la oracion", () => {
    expect(password("pass en la pc")).toEqual(4);
  });
});
