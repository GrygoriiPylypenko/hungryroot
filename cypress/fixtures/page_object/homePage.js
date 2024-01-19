class Homepage {
  get logInButton() {
    return cy.get('[data-cy="header-nav-link"]');
  }

  get signUpButton() {
    return cy.get('[data-cy="header-nav-button"]');
  }

  get logOutButton() {
    return cy.get('[data-cy="header-nav-link"]');
  }

  get quizButtonNavSection() {
    return cy.get('[data-cy="header-nav-button"]');
  }

  get quizButtonHeroSection() {
    return cy.get('[data-cy="section-hero-cta"]');
  }

  get notRightNowButton() {
    return cy.get('[data-cy="cyo-not-right-now"]');
  }
}
export default new Homepage();
