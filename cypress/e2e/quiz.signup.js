import HomePage from '../fixtures/page_object/homePage';
import QuizPage from '../fixtures/page_object/quizPage';
import SignupPage from '../fixtures/page_object/signupPage';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

describe('Quiz and signup', () => {
  before('login', () => {
    cy.visit('/');
  });

  it('Should submit the quiz and fill out the signup form', () => {
    HomePage.signUpButton.click();
    QuizPage.quizStartButton.click();
    QuizPage.quizHelloSelection();
    QuizPage.quizEatingHabitsSelection();
    QuizPage.macroNutrientSelection();
    QuizPage.cookingHabitsSelection();
    QuizPage.appliancesSelection();
    QuizPage.cuisinesSelection();
    QuizPage.flavorsSelection();
    QuizPage.meatSelection();
    QuizPage.fishSelection();
    QuizPage.plantsSelection();
    QuizPage.polarizingSelection();
    QuizPage.spiceSelection();
    QuizPage.breakfastSelection();
    QuizPage.lunchDinnerSelection();
    QuizPage.readyMadeSelection();
    QuizPage.snacksSelection();
    QuizPage.sweetsSelection();
    cy.url({ timeout: 10000 }).should(
      'eq',
      'https://www.hungryroot.com/signup/'
    );
    SignupPage.firstNameInputField.type(firstName);
    SignupPage.lastNameInputField.type(lastName);
    SignupPage.emailInputField.type(email);
    SignupPage.passwordInputField.type(password);
  });
});
