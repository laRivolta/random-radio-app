// https://docs.cypress.io/api/introduction/api.html

describe("RandomRadio", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("span", "¡Has llegado a Random Radio!");
  });
});
