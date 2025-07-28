/// <reference types="cypress" />

describe('TaskFlow - Login and Create Task Test Suite', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.icon').click();
    });

    it('Login with valid credentials', () => {
        cy.get(':nth-child(1) > input').clear().type('hbuttss84@gmail.com');  
        cy.get(':nth-child(2) > input').clear().type('Pakistan02@');          
        cy.get('.auth-submit').click();

        cy.get('h1', { timeout: 10000 }).should('contain', 'TaskFlow');
    });

    it('Login with invalid credentials - Wrong Password', () => {
        cy.get(':nth-child(1) > input').clear().type('hbuttss84@gmail.com'); 
        cy.get(':nth-child(2) > input').clear().type('WrongPassword');        
        cy.get('.auth-submit').click();


    });

    it('Login with invalid credentials - Wrong Email', () => {
        cy.get(':nth-child(1) > input').clear().type('wrong@email.com');      
        cy.get(':nth-child(2) > input').clear().type('Pakistan02@');          
        cy.get('.auth-submit').click();


    });

    it('Login with valid credentials - create New task_Edit and delete', () => {
        // Login
        cy.get(':nth-child(1) > input').clear().type('hbuttss84@gmail.com');
        cy.get(':nth-child(2) > input').clear().type('Pakistan02@');
        cy.get('.auth-submit').click();

        // Wait for home/dashboard
        cy.get('h1', { timeout: 10000 }).should('contain', 'TaskFlow');

        // Add new task
        cy.contains('Add Task').click(); 
        cy.get('.title-input').type('Add New Task Description')
        cy.get('.category-select').select('Work')
        cy.get('.priority-select').select('Low Priority')
        cy.get('.submit-btn').click()
        //Edit test case
        cy.get(':nth-child(1) > .todo-header > .todo-checkbox').click()
        cy.get(':nth-child(1) > .todo-header > .todo-actions > .edit > .icon').click()
        cy.get(':nth-child(1) > .todo-content > .edit-title').clear().type("Edit Description")
        cy.get(':nth-child(1) > .todo-header > .todo-checkbox').click()
            
        cy.get(':nth-child(1) > .todo-header > .todo-actions > .save > .icon').click()
        cy.window().scrollTo('top');
        //delete task
        cy.get(':nth-child(1) > .todo-header > .todo-checkbox').click()
        cy.get(':nth-child(1) > .todo-header > .todo-actions > .delete')


    });
    
});
