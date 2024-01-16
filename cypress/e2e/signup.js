import HomePage from '../fixtures/page_object/homePage';
import QuizPage from '../fixtures/page_object/quizPage';
import SignupPage from '../fixtures/page_object/signupPage';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

describe('Register new account', () => {
  before('login', () => {
    cy.visit('/');
  });

  it('Should submit the quiz and register new account', () => {
    HomePage.signUpButton.click();
    QuizPage.quizStartButton.click();
    QuizPage.meVariantToggle.click();
    QuizPage.improveHealthToggle.click();
    QuizPage.saveMoneyToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.omnivoreToggle.click();
    QuizPage.dairyFreeToggle.click();
    QuizPage.soyFreeToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.highProteinToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.cookAsLittleAsPossibleToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.stoveToggle.click();
    QuizPage.grillToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.classicAmericanLike.click();
    QuizPage.fusionDislike.click();
    QuizPage.quizNextButton.click();
    QuizPage.sweetAndBalancedLike.click();
    QuizPage.brightAndZingyDislike.click();
    QuizPage.quizNextButton.click();
    QuizPage.beefBisonAbsolutelyButton.click();
    QuizPage.poultrySoSoButton.click();
    QuizPage.porkNoThanksButton.click();
    QuizPage.quizNextButton.click();
    QuizPage.freshFishAbsolutelyButton.click();
    QuizPage.smokedFishNoThanksButton.click();
    QuizPage.shellFishSoSoButton.click();
    QuizPage.quizNextButton.click();
    QuizPage.tofuTempehAbsolutelyButton.click();
    QuizPage.beansLentilsNoTHanksButton.click();
    QuizPage.meatAlternativesSoSoButton.click();
    QuizPage.quizNextButton.click();
    QuizPage.cilantroToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.mildToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.eggsToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.breakfastDaysAllButton.click();
    QuizPage.quizNextButton.click();
    QuizPage.mainSidesToggle.click();
    QuizPage.saladToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.lunchDaysSomeButton.click();
    QuizPage.dinnerDaysNoneButton.click();
    QuizPage.quizNextButton.click();
    QuizPage.quizNextButton.click();
    QuizPage.jerkyToggle.click();
    QuizPage.quizNextButton.click();
    QuizPage.snacksDaysAllButton.click();
    QuizPage.quizNextButton.click();
    QuizPage.quizNextButton.click();
    QuizPage.sweetsDaysNoneButton.click();
    QuizPage.quizNextButton.click().then(() => {
      cy.url().should('eq', 'https://www.hungryroot.com/quiz/building/');
    });
    cy.url({ timeout: 10000 }).should(
      'eq',
      'https://www.hungryroot.com/signup/'
    );
    SignupPage.firstNameInputField.type(firstName);
    SignupPage.lastNameInputField.type(lastName);
    SignupPage.emailInputField.type(email);
    SignupPage.passwordInputField.type(password);
    // cy.intercept('POST', 'https://www.hungryroot.com/api/signup/').as('signUp');
    // SignupPage.signUpFormSubmitButton.click();
    // cy.wait('@signUp').its('response.statusCode').should('eq', 200);
  });
});
