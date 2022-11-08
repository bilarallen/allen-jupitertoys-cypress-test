class ShopObjects {
  product = {
    itemStuffedFrog: () => cy.get("li[id='product-2']"),
    itemFluffyBunny: () => cy.get("li[id='product-4']"),
    itemValentineBear: () => cy.get("li[id='product-7']"),
  };

  title = {
    textProductTitle: () => cy.get("h4"),
  };

  button = {
    buttonBuy: () => cy.get("[ng-click='add(item)']"),
    btnShop:() => cy.get("#nav-shop")
  };

  
}

export default new ShopObjects();
