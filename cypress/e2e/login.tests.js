import HomePage from '../fixtures/page_object/homePage';
import LoginPage from '../fixtures/page_object/loginPage';

let testUserData;
let errorMessage;

describe('Login', () => {
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

  it('Should login with valid credentials', () => {
    LoginPage.userCredentialsType(testUserData.email, testUserData.password);
    LoginPage.newSignInButton.click();
    HomePage.logOutButton.should('be.visible');
  });

  it('Should not login with invalid credentials', () => {
    LoginPage.userCredentialsType(
      testUserData.email + 1,
      testUserData.password + 1
    );
    LoginPage.newSignInButton.click();
    LoginPage.loginErrorNotification
      .should('be.visible')
      .and('contain', errorMessage.loginError);
  });

  it('Should not login with empty fields', () => {
    LoginPage.newSignInButton.click();
    LoginPage.loginErrorNotification
      .should('be.visible')
      .and('contain', errorMessage.loginError);
  });
});
