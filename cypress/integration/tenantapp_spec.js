describe('Tenant registration', function() {
  it('Reg process', function() {
    cy.visit('http://localhost:3000');

    cy.get('input[name="name"]')
      .type('Fake User')
      .should('have.value', 'Fake User');

    cy.get('button[type="submit"]').click();

    cy.get('input[name="email"]')
      .type('fake@mail.com')
      .should('have.value', 'fake@mail.com');

    cy.get('button[type="submit"]').click();

    cy.get('input[name="phone"]')
      .type('123456789')
      .should('have.value', '123456789');

    cy.get('button[type="submit"]').click();

    cy.get('[type="radio"]')
      .first()
      .check();

    cy.get('button[type="submit"]').click();

    cy.get('.user-name').contains('Fake User');
    cy.get('.user-email').contains('fake@mail.com');
    cy.get('.user-phone').contains('123456789');
    cy.get('.user-salary').contains('0 - 1000');
  });
});
