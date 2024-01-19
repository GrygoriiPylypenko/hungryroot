import HomePage from '../fixtures/page_object/homePage';
import LoginPage from '../fixtures/page_object/loginPage';
import SurveyPage from '../fixtures/page_object/surveyPage';

let testUserData;

describe('Survey', () => {
  before('Load fixtures', () => {
    cy.fixture('testCredentials.json').then(data => {
      testUserData = data;
    });
    cy.visit('/');
    HomePage.logInButton.click();
  });

  it('Should login and verify quiz result', () => {
    LoginPage.userCredentialsType(testUserData.email, testUserData.password);
    LoginPage.newSignInButton.click();
    HomePage.quizButtonNavSection.click();
    SurveyPage.surveyModule.should(
      'contain',
      `Recommended for ${testUserData.firstName}`
    );
    SurveyPage.mealsLunch.should('contain', '4 meals for 2 people');
    SurveyPage.mealsDinner.should('contain', 'None');
    SurveyPage.breakfastItems.should('contain', '4-6 servings');
    SurveyPage.snacksItems.should('contain', '2-4 servings');
    SurveyPage.sweetsItems.should('contain', '0 servings');
  });
});
