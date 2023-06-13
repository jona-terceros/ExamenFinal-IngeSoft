import password from "./password";

describe("Password", () => {
  it("deberia mostrar el password ingresado", () => {
    expect(password("pass")).toEqual("pass");
  });
});
