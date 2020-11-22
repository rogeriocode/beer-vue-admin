// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Register', () => {
    cy.visit('http://localhost:8080/');
    cy.get('.form-name').type("Testando End Thow End")
  });
});
