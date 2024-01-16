class Homepage {
  get logInButton() {
    return cy.get('[data-cy="header-nav-link"]');
  }

  get signUpButton() {
    return cy.get('[data-cy="header-nav-button"]');
  }

  get takeTheQuizButtonHeroSection() {
    return cy.get('[data-cy="section-hero-cta"]');
  }
}
export default new Homepage();
