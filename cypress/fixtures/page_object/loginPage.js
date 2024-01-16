class LoginPage {
  get emailInputField() {
    return cy.get('.main [title="email"]');
  }

  get passwordInputField() {
    return cy.get('.main [title="password"]');
  }

  get newSignInButton() {
    return cy.get('.main [class="new-signin-button"]');
  }

  get loginErrorNotification() {
    return cy.get('[class="error login-error hidden"]');
  }

  userCredentialsType(email, password) {
    this.emailInputField.type(email);
    this.passwordInputField.type(password);
  }
}
export default new LoginPage();
