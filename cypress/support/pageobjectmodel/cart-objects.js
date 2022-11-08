class CartObjects {
  tableCart = {
    dataRow: () => cy.get("tr[ng-repeat='item in cart.items()']"),
    dataCell: () => cy.get("td"),
    dataColumnSubtotal: () => cy.get("td:nth-child(4)"),
    textTotal: () => cy.get(".total"),
  };

  button = {
    btnCart: () => cy.get("#nav-cart"),
  };
}

export default new CartObjects();
