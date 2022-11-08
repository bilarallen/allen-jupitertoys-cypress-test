import shopObjects from "./shop-objects";
class ShopActions {
  clickNavigateToShop() {
    shopObjects.button.btnShop().click();
    cy.url().should("contain", "/#/shop")

    return this;
  }

  validateStuffedFrog() {
    shopObjects.product
      .itemStuffedFrog()
      .should("be.visible")
      .within(() => {
        shopObjects.title
          .textProductTitle()
          .should("contain.text", "Stuffed Frog");
      });

    return this;
  }

  clickBuyStuffedFrog(repeat) {
    shopObjects.product.itemStuffedFrog().within(() => {
      shopObjects.button.buttonBuy().should("contain.text", "Buy");
      for (let i = 1; i <= parseInt(repeat); i++) {
        shopObjects.button.buttonBuy().click();
      }
    });

    return this;
  }

  validateFluffyBunny() {
    shopObjects.product
      .itemFluffyBunny()
      .should("be.visible")
      .within(() => {
        shopObjects.title
          .textProductTitle()
          .should("contain.text", "Fluffy Bunny");
      });

    return this;
  }

  clickBuyFluffyBunny(repeat) {
    shopObjects.product.itemFluffyBunny().within(() => {
      shopObjects.button.buttonBuy().should("contain.text", "Buy");
      for (let i = 1; i <= parseInt(repeat); i++) {
        shopObjects.button.buttonBuy().click();
      }
    });

    return this;
  }

  validateValentineBear() {
    shopObjects.product
      .itemValentineBear()
      .should("be.visible")
      .within(() => {
        shopObjects.title
          .textProductTitle()
          .should("contain.text", "Valentine Bear");
      });

    return this;
  }

  clickBuyValentineBear(repeat) {
    shopObjects.product.itemValentineBear().within(() => {
      shopObjects.button.buttonBuy().should("contain.text", "Buy");
      for (let i = 1; i <= parseInt(repeat); i++) {
        shopObjects.button.buttonBuy().click();
      }
    });

    return this;
  }
}

export default new ShopActions();
