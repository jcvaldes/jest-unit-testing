describe('bmi calculator', () => {
  it('calculate thinness result', () => {
    cy.visit('/')
    // cy.get('#weight').type('50');
    cy.findByLabelText('Weight (KG)').type('50')
    // cy.get('#height').type('1.7');
    cy.findByLabelText('Height (M)').type('1.7')

    cy.get('button').click()

    // cy.get('.App > :nth-child(2)').should('have.text', 'BMI: 17.30')
    // cy.get('.App > :nth-child(3)').should('contain', 'Thinness')
    
    // Lo manejo con testing-library
    cy.findByText(/bmi: 17.30/i).should('be.visible')
    cy.findByText(/bmi estimation: thinness/i).should('be.visible')
  })
  it('calculate normal result', () => {
    cy.visit('/')
    cy.findByLabelText('Weight (KG)').type('60')
    cy.findByLabelText('Height (M)').type('1.7')

    cy.get('button').click()

    cy.findByText(/bmi: 20.76/i).should('be.visible')
    cy.findByText(/bmi estimation: normal/i).should('be.visible')
  })
  it('calculate overweight result', () => {
    cy.visit('/')
    cy.findByLabelText('Weight (KG)').type('80')
    cy.findByLabelText('Height (M)').type('1.7')

    cy.get('button').click()

    cy.findByText(/bmi: 27.68/i).should('be.visible')
    cy.findByText(/bmi estimation: overweight/i).should('be.visible')
  })
  it('calculate obese result', () => {
    cy.visit('/')
    cy.findByLabelText('Weight (KG)').type('105')
    cy.findByLabelText('Height (M)').type('1.7')

    cy.get('button').click()

    cy.findByText(/bmi: 36.33/i).should('be.visible')
    cy.findByText(/bmi estimation: obese/i).should('be.visible')
  })
})
