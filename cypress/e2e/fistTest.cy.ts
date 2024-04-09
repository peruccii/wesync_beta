import { randomUUID } from 'crypto'
import uuid from 'react-uuid'

describe('Register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register')
  })
   it('Can be possible exists the necessary components to login', () => {
    cy.get('[data-testId="name_input"]').should('be.visible')
    cy.get('[data-testId="email_input"]').should('be.visible')
    cy.get('[data-testId="password_input"]').should('be.visible')
    cy.get('[data-testId="register_button"]').should('be.visible')
   })
 
   it('Can be possible login', () => {
    // cy.get('[data-testId="name_input"]').type('name')
    // cy.get('[data-testId="email_input"]').type(`name${Math.random()}@gmail.com`)
    // cy.get('[data-testId="password_input"]').type('name123')
    // cy.get('[data-testId="register_button"]').click()
    // cy.url().should('include', '/dashboard')
   })
})