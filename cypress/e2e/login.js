import HomePage from '../fixtures/page_object/homePage';
import LoginPage from '../fixtures/page_object/loginPage';

let testUserData;
let errorMessage;
describe('Login tests', () => {
  before('Load fixtures', () => {
    cy.fixture('testCredentials.json').then(data => {
      testUserData = data;
    });
    cy.fixture('loginErrorMessages.json').then(message => {
      errorMessage = message;
    });
  });

  beforeEach('Visit login page', () => {
    cy.visit('/');
    HomePage.logInButton.click();
  });

  it('Should login with valid credantials', () => {
    LoginPage.userCredentialsType(testUserData.email, testUserData.password);
    cy.intercept('POST', '/api/login/').as('login');
    LoginPage.newSignInButton.click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('Should not login with invalid credantials', () => {
    LoginPage.userCredentialsType(
      testUserData.email + 1,
      testUserData.password + 1
    );
    LoginPage.newSignInButton.click();
    LoginPage.loginErrorNotification.should(
      'is.visible',
      errorMessage.loginError
    );
  });

  it('Should not login with empty fields', () => {
    LoginPage.newSignInButton.click();
    LoginPage.loginErrorNotification.should(
      'is.visible',
      errorMessage.loginError
    );
  });
});
