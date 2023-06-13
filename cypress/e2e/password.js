describe("passowrd", () => {
    it("deberia mostrar", () => {
      cy.visit("/");
      cy.get("#texto").type("hola");
      cy.get("#contar-button").click();
      cy.get("#resultado-div").should("contain", 1);
    });
  });