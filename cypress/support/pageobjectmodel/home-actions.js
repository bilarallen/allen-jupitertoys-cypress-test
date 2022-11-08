import homeObjects from "./home-objects";
class HomeActions {
  validateLabelHeader() {
    homeObjects.home.labelHeader().should("contain.text", "Jupiter Toys");

    return this;
  }

  validateLabelSubheader() {
    homeObjects.home
      .labelSubHeader()
      .should(
        "contain.text",
        "toys, games, puzzles, art and craft, novelties, teddy bears, bicycles, kites, models, sports, gifts..."
      );

    return this;
  }

  validateStartShoppingButton() {
    homeObjects.home
      .btnStartShopping()
      .should("contain.text", "Start Shopping »")
      .should("have.attr", "href", "#/shop");

    return this;
  }

  validateLabelWelcomeText() {
    homeObjects.home.labelWelcomeText().should("contain.text", "Welcome to Jupiter Toys, a magical world for good girls and boys.");

    return this;
  }
}

export default new HomeActions();
