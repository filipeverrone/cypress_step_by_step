/// <reference types="cypress" />

describe("Access the URL", () => {
  before(() => {
    cy.visit("https://www.mercadolivre.com.br/");
  });

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
});
