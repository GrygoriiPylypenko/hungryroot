class QuizPage {
  get quizStartButton() {
    return cy.get('[data-cy="quiz-page-intro-button"]');
  }

  get meVariantToggle() {
    return cy.get('[data-cy="quiz-page-hello-toggle-household-size-me"]');
  }

  get improveHealthToggle() {
    return cy.get('[data-cy="quiz-page-hello-toggle-goal-2"]');
  }

  get saveMoneyToggle() {
    return cy.get('[data-cy="quiz-page-hello-toggle-goal-7"]');
  }

  get saveMoneyToggle() {
    return cy.get('[data-cy="quiz-page-hello-toggle-household-size-me"]');
  }

  get quizNextButton() {
    return cy.get('[data-cy="quiz-button-next"]');
  }

  get omnivoreToggle() {
    return cy.get('[data-cy="quiz-page-eating-habits-toggle-omnivore"]');
  }

  get dairyFreeToggle() {
    return cy.get('[data-cy="quiz-page-eating-habits-toggle-dairy-free"]');
  }

  get omnivoreToggle() {
    return cy.get('[data-cy="quiz-page-eating-habits-toggle-omnivore"]');
  }

  get soyFreeToggle() {
    return cy.get('[data-cy="quiz-page-eating-habits-toggle-soy-free"]');
  }

  get highProteinToggle() {
    return cy.get('[data-cy="quiz-page-macro-nutrient-toggle-tag-244"]');
  }

  get cookAsLittleAsPossibleToggle() {
    return cy.get(
      '[data-cy="quiz-page-cooking-habits-toggle-little-as-possible"]'
    );
  }

  get cookAsSimpleAsPossible() {
    return cy.get('[data-cy="quiz-page-cooking-habits-toggle-simple"]');
  }

  get grillToggle() {
    return cy.get('[data-cy="quiz-page-appliances-toggle-tag-151"]');
  }

  get stoveToggle() {
    return cy.get('[data-cy="quiz-page-appliances-toggle-tag-156"]');
  }

  get classicAmericanLike() {
    return cy.get(
      '[data-cy="quiz-page-cuisines-toggle-tag-81-binary-rating-thumbsup"]'
    );
  }

  get classicAmericanLike() {
    return cy.get(
      '[data-cy="quiz-page-cuisines-toggle-tag-81-binary-rating-thumbsup"]'
    );
  }

  get fusionDislike() {
    return cy.get(
      '[data-cy="quiz-page-cuisines-toggle-tag-136-binary-rating-thumbsdown"]'
    );
  }

  get sweetAndBalancedLike() {
    return cy.get(
      '[data-cy="quiz-page-flavors-toggle-tag-55-binary-rating-thumbsup"]'
    );
  }

  get brightAndZingyDislike() {
    return cy.get(
      '[data-cy="quiz-page-flavors-toggle-tag-76-binary-rating-thumbsdown"]'
    );
  }

  get beefBisonAbsolutelyButton() {
    return cy.get('[data-cy="quiz-page-meat-toggle-tag-1-button-absolutely"]');
  }

  get poultrySoSoButton() {
    return cy.get('[data-cy="quiz-page-meat-toggle-tag-2-button-so-so"]');
  }

  get porkNoThanksButton() {
    return cy.get('[data-cy="quiz-page-meat-toggle-tag-3-button-no thanks"]');
  }

  get freshFishAbsolutelyButton() {
    return cy.get(
      '[data-cy="quiz-page-seafood-toggle-tag-4-button-absolutely"]'
    );
  }

  get smokedFishNoThanksButton() {
    return cy.get(
      '[data-cy="quiz-page-seafood-toggle-tag-6-button-no thanks"]'
    );
  }

  get shellFishSoSoButton() {
    return cy.get('[data-cy="quiz-page-seafood-toggle-tag-5-button-so-so"]');
  }

  get tofuTempehAbsolutelyButton() {
    return cy.get(
      '[data-cy="quiz-page-plants-toggle-tag-7-button-absolutely"]'
    );
  }

  get beansLentilsNoThanksButton() {
    return cy.get('[data-cy="quiz-page-plants-toggle-tag-9-button-no thanks"]');
  }

  get meatAlternativesSoSoButton() {
    return cy.get('[data-cy="quiz-page-plants-toggle-tag-10-button-so-so"]');
  }

  get cilantroToggle() {
    return cy.get('[data-cy="quiz-page-polarizing-toggle-tag-165"]');
  }

  get mildToggle() {
    return cy.get('[data-cy="quiz-page-spice-toggle-tag-20"]');
  }

  get eggsToggle() {
    return cy.get('[data-cy="quiz-page-breakfast-toggle-tag-28"]');
  }

  get breakfastDaysAllButton() {
    return cy.get(
      '[data-cy="quiz-page-breakfast-question-frequency-options-button-all"]'
    );
  }

  get mainSidesToggle() {
    return cy.get('[data-cy="quiz-page-lunch-dinner-toggle-tag-6"]');
  }

  get saladToggle() {
    return cy.get('[data-cy="quiz-page-lunch-dinner-toggle-tag-4"]');
  }

  get lunchDaysSomeButton() {
    return cy.get(
      '[data-cy="quiz-page-lunch-dinner-question-lunch-frequency-options-button-some"]'
    );
  }

  get dinnerDaysNoneButton() {
    return cy.get(
      '[data-cy="quiz-page-lunch-dinner-question-dinner-frequency-options-button-none"]'
    );
  }

  get readyMadeBurritos() {
    return cy.get('[data-cy="quiz-page-ready-made-toggle-tag-234"]');
  }

  get jerkyToggle() {
    return cy.get('[data-cy="quiz-page-snacks-toggle-tag-44"]');
  }

  get snacksDaysAllButton() {
    return cy.get('[data-cy="quiz-page-snacks-toggle-tag-44"]');
  }

  get sweetsDaysNoneButton() {
    return cy.get(
      '[data-cy="quiz-page-sweets-question-frequency-options-button-none"]'
    );
  }

  get exitQuizButton() {
    return cy.get('[data-cy="header-button"]');
  }

  quizHelloSelection() {
    this.meVariantToggle.click();
    this.improveHealthToggle.click();
    this.saveMoneyToggle.click();
    this.quizNextButton.click();
  }

  quizEatingHabitsSelection() {
    this.omnivoreToggle.click();
    this.dairyFreeToggle.click();
    this.soyFreeToggle.click();
    this.quizNextButton.click();
  }

  macroNutrientSelection() {
    this.highProteinToggle.click();
    this.quizNextButton.click();
  }

  cookingHabitsSelection() {
    this.cookAsLittleAsPossibleToggle.click();
    this.cookAsSimpleAsPossible.click();
    this.quizNextButton.click();
  }

  appliancesSelection() {
    this.stoveToggle.click();
    this.grillToggle.click();
    this.quizNextButton.click();
  }

  cuisinesSelection() {
    this.classicAmericanLike.click();
    this.fusionDislike.click();
    this.quizNextButton.click();
  }

  flavorsSelection() {
    this.sweetAndBalancedLike.click();
    this.brightAndZingyDislike.click();
    this.quizNextButton.click();
  }

  meatSelection() {
    this.beefBisonAbsolutelyButton.click();
    this.poultrySoSoButton.click();
    this.porkNoThanksButton.click();
    this.quizNextButton.click();
  }

  fishSelection() {
    this.freshFishAbsolutelyButton.click();
    this.smokedFishNoThanksButton.click();
    this.shellFishSoSoButton.click();
    this.quizNextButton.click();
  }

  plantsSelection() {
    this.tofuTempehAbsolutelyButton.click();
    this.beansLentilsNoThanksButton.click();
    this.meatAlternativesSoSoButton.click();
    this.quizNextButton.click();
  }

  polarizingSelection() {
    this.cilantroToggle.click();
    this.quizNextButton.click();
  }

  spiceSelection() {
    this.mildToggle.click();
    this.quizNextButton.click();
  }

  breakfastSelection() {
    this.eggsToggle.click();
    this.quizNextButton.click();
    this.breakfastDaysAllButton.click();
    this.quizNextButton.click();
  }

  lunchDinnerSelection() {
    this.mainSidesToggle.click();
    this.saladToggle.click();
    this.quizNextButton.click();
    this.lunchDaysSomeButton.click();
    this.dinnerDaysNoneButton.click();
    this.quizNextButton.click();
  }

  readyMadeSelection() {
    this.readyMadeBurritos.click();
    this.quizNextButton.click();
  }

  snacksSelection() {
    this.jerkyToggle.click();
    this.quizNextButton.click();
    this.snacksDaysAllButton.click();
    this.quizNextButton.click();
  }

  sweetsSelection() {
    this.quizNextButton.click();
    this.sweetsDaysNoneButton.click();
    this.quizNextButton.click();
  }
}
export default new QuizPage();
