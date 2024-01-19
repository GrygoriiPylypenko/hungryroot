class SurveyPage {
  get surveyModule() {
    return cy.get('#survey', { timeout: 10000 });
  }

  get mealsLunch() {
    return cy.get('[data-cy="lunch"]');
  }

  get mealsDinner() {
    return cy.get('[data-cy="dinner"]');
  }

  get breakfastItems() {
    return cy.get('[data-cy="breakfast-items"]');
  }

  get snacksItems() {
    return cy.get('[data-cy="snacks"]');
  }

  get sweetsItems() {
    return cy.get('[data-cy="sweets"]');
  }
}
export default new SurveyPage();
