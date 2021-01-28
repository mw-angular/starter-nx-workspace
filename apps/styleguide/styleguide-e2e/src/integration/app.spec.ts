// import { getGreeting } from '../support/app.po';

describe('styleguide/styleguide', (): void => {
  beforeEach((): void => {
    cy.visit('/');
  });

  it('should display welcome message', (): void => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome to styleguide/styleguide!');
  });
});
