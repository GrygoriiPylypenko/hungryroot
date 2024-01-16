class SignUpPage {
  get firstNameInputField() {
    return cy.get('[data-cy="signup-form-first-name"]');
  }

  get lastNameInputField() {
    return cy.get('[data-cy="signup-form-last-name"]');
  }

  get emailInputField() {
    return cy.get('[data-cy="signup-form-email"]');
  }

  get passwordInputField() {
    return cy.get('[data-cy="signup-form-password"]');
  }

  get signUpFormSubmitButton() {
    return cy.get('[data-cy="signup-form-submit-button"]');
  }
}
export default new SignUpPage();
