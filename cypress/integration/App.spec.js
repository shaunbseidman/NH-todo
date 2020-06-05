describe ('Get input', () => {
    it ('Focus on the input', () => {
      cy.visit ('/');
      cy.get('.task-input')
    });
  });

  describe('Accepts input', () => {
      it('Types in the add task input', () => {
      const text = 'New Task';
      const inputForm = '.makeStyles-taskForm-10 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
      cy.visit ('/');
      cy.get('.task-input').type (text)
      cy.get(inputForm).should ('have.value', text);
      })
  })

  describe ('Adds One Task', () => {
    context ('No current tasks', () => {
      it ('Adds a singular task', () => {
        cy.visit ('/');
        cy.get ('.task-input').type ('First Task').type ('{enter}');

      });
    });
  });

  describe ('Adds Multiple Tasks', () => {
    context ('No Task', () => {
      it ('Adds a new task', () => {
        cy.visit ('/');
        cy.get ('.task-input').type ('First Task').type ('{enter}');
        cy.get ('.task-input').type ('Second Task').type ('{enter}');
        cy.get ('.task-input').type ('Third Task').type ('{enter}');
        cy.get ('.task-input').type ('Fourth Task').type ('{enter}');
      });
    });
  });

  describe ('Completes a task', () => {
    context ('Completes a task', () => {
      it ('Completes an already submitted task', () => {
        const taskItem = '.MuiListItem-root > .MuiTypography-root';
        cy.visit ('/');
        cy.get ('.task-input').type ('Task to be completed').type ('{enter}');
        cy.get('.MuiListItem-root > div').click();
        cy.get(taskItem) .should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
      });
    });
  });

  describe ('Completes deletes task', () => {
    context ('Completes deletes task', () => {
      it ('Deletes a submitted task', () => {
        cy.visit ('/');
        cy.get ('.task-input').type ('Task to be deleted Task').type ('{enter}');
        cy.get('.MuiIconButton-root').click()
      });
    });
  });

  describe ('Adds multiple tasks', () => {
    context ('Can complete or delete indiviual tasks', () => {
      it ('Adds multiple tasks and adds and complete different ones', () => {
        cy.visit ('/');
        cy.get ('.task-input').type ('First Task').type ('{enter}');
        cy.get ('.task-input').type ('Second Task').type ('{enter}');
        cy.get ('.task-input').type ('Third Task').type ('{enter}');
        cy.get ('.task-input').type ('Fourth Task').type ('{enter}');
        cy.get (':nth-child(1) > .MuiListItem-root > div > .MuiButton-root > .MuiButton-label').click();
        cy.get (':nth-child(2) > .MuiListItem-root > div > .MuiIconButton-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
      });
    });
  });

  describe ('Search for tasks', () => {
    context ('Can search for submitted tasks', () => {
      it ('Types in the search input and searches for a submitted task', () => {
        cy.visit ('/');
        const textToSearch = "First Task";
        const searchInput = ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
        cy.get ('.task-input').type ('First Task').type ('{enter}');
        cy.get ('.task-input').type ('Second Task').type ('{enter}');
        cy.get ('.task-input').type ('Third Task').type ('{enter}');
        cy.get ('.task-input').type ('Fourth Task').type ('{enter}');
        cy.get(searchInput).type(textToSearch);
        cy.get(searchInput).should('have.value', textToSearch)
      });
    });
  });
