import Chainable = Cypress.Chainable;

export const getGreeting = (): Chainable<JQuery<HTMLElement>> => {
  return cy.get('h1');
};
