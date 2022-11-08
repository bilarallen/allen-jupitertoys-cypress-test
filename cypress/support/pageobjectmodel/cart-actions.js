import cartObjects from "./cart-objects";
class CartActions {
  clickNavigateToCart() {
    cartObjects.button.btnCart().click();

    cy.url().should("contain", "/#/cart");

    return this;
  }

  validateSelectedStuffedFrog() {
    cartObjects.tableCart
      .dataRow()
      .eq(0)
      .within(() => {
        cartObjects.tableCart
          .dataCell()
          .eq(0)
          .children("img")
          .should("have.attr", "ng-src", "images/src-embed/frog.jpg")
          .parent()
          .should("contain.text", "Stuffed Frog");
      });

    return this;
  }

  validateStuffedFrogSubtotal() {
    cartObjects.tableCart
      .dataRow()
      .eq(0)
      .within(() => {
        cartObjects.tableCart.dataCell().eq(1).invoke("text").as("price");
        cartObjects.tableCart
          .dataCell()
          .eq(2)
          .children("input")
          .invoke("val")
          .as("quantity");
        cartObjects.tableCart.dataCell().eq(3).invoke("text").as("subtotal");

        cy.get("@subtotal").then((sub) => {
          cy.get("@price").then((prc) => {
            cy.get("@quantity").then((qty) => {
              let subtotal = parseFloat(String(sub).replace("$", ""));
              let price = parseFloat(String(prc).replace("$", ""));
              let quantity = parseFloat(qty);

              subtotal = price * quantity;
              expect(sub).to.be.eq(`$${subtotal}`);
            });
          });
        });
      });

    return this;
  }

  validateStuffedFrogPrice() {
    cartObjects.tableCart
      .dataRow()
      .eq(0)
      .within(() => {
        cartObjects.tableCart.dataCell().eq(1).invoke("text").as("price");

        cy.get("@price").then((price) => {
          expect(price).to.be.eq("$10.99");
        });
      });

    return this;
  }

  validateSelectedFluffyBunny() {
    cartObjects.tableCart
      .dataRow()
      .eq(1)
      .within(() => {
        cartObjects.tableCart
          .dataCell()
          .eq(0)
          .children("img")
          .should("have.attr", "ng-src", "images/src-embed/bunny.jpg")
          .parent()
          .should("contain.text", "Fluffy Bunny");
      });

    return this;
  }

  validateFluffyBunnySubtotal() {
    cartObjects.tableCart
      .dataRow()
      .eq(1)
      .within(() => {
        cartObjects.tableCart.dataCell().eq(1).invoke("text").as("price");
        cartObjects.tableCart
          .dataCell()
          .eq(2)
          .children("input")
          .invoke("val")
          .as("quantity");
        cartObjects.tableCart.dataCell().eq(3).invoke("text").as("subtotal");

        cy.get("@subtotal").then((sub) => {
          cy.get("@price").then((prc) => {
            cy.get("@quantity").then((qty) => {
              let subtotal = parseFloat(String(sub).replace("$", ""));
              let price = parseFloat(String(prc).replace("$", ""));
              let quantity = parseFloat(qty);

              subtotal = price * quantity;
              expect(sub).to.be.eq(`$${subtotal}`);
            });
          });
        });
      });

    return this;
  }

  validateFluffyBunnyPrice() {
    cartObjects.tableCart
      .dataRow()
      .eq(1)
      .within(() => {
        cartObjects.tableCart.dataCell().eq(1).invoke("text").as("price");

        cy.get("@price").then((price) => {
          expect(price).to.be.eq("$9.99");
        });
      });

    return this;
  }

  validateSelectedValentineBear() {
    cartObjects.tableCart
      .dataRow()
      .eq(2)
      .within(() => {
        cartObjects.tableCart
          .dataCell()
          .eq(0)
          .children("img")
          .should("have.attr", "ng-src", "images/src-embed/valentine.jpg")
          .parent()
          .should("contain.text", "Valentine Bear");
      });

    return this;
  }

  validateValentineBearSubtotal() {
    cartObjects.tableCart
      .dataRow()
      .eq(2)
      .within(() => {
        cartObjects.tableCart.dataCell().eq(1).invoke("text").as("price");
        cartObjects.tableCart
          .dataCell()
          .eq(2)
          .children("input")
          .invoke("val")
          .as("quantity");
        cartObjects.tableCart.dataCell().eq(3).invoke("text").as("subtotal");

        cy.get("@subtotal").then((sub) => {
          cy.get("@price").then((prc) => {
            cy.get("@quantity").then((qty) => {
              let subtotal = parseFloat(String(sub).replace("$", ""));
              let price = parseFloat(String(prc).replace("$", ""));
              let quantity = parseFloat(qty);

              subtotal = price * quantity;
              expect(sub).to.be.eq(`$${subtotal}`);
            });
          });
        });
      });

    return this;
  }

  validateValentineBearPrice() {
    cartObjects.tableCart
      .dataRow()
      .eq(2)
      .within(() => {
        cartObjects.tableCart.dataCell().eq(1).invoke("text").as("price");

        cy.get("@price").then((price) => {
          expect(price).to.be.eq("$14.99");
        });
      });

    return this;
  }

  validateTotal() {
    cartObjects.tableCart.dataColumnSubtotal().then(function ($cells) {
      const totals = $cells
        .toArray()
        .map(function (el) {
          return el.innerText;
        })
        .map(function (s) {
          return s.replace("$", "");
        })
        .map(parseFloat);
      const sum = Cypress._.sum(totals);

      cartObjects.tableCart
        .textTotal()
        .invoke("text")
        .then((total) => {
          expect(sum).to.eq(parseFloat(total.replace("Total:", "").trim()));
        });
    });
  }
}

export default new CartActions();
