import { faker } from "@faker-js/faker";
import home from "../support/pageobjectmodel/home-actions";
import contact from "../support/pageobjectmodel/contact-actions";
import shop from "../support/pageobjectmodel/shop-actions";
import cart from "../support/pageobjectmodel/cart-actions";
describe("Jupiter Toys Tests", () => {
  it("TC1- Validate field error messages for contact page", () => {
    cy.visit("/#/home");
    // validate homepage
    home
      .validateLabelHeader()
      .validateLabelSubheader()
      .validateLabelWelcomeText()
      .validateStartShoppingButton();

    // Go to Contact Page and assert default banner text
    contact
      .clickNavigateToContact()
      .validateAlertBanner("We welcome your feedback - tell it how it is.")

      // Click submit with empty fields and validate field error messages
      .clickSubmit()
      .validateAlertBanner(
        "We welcome your feedback - but we won't get it unless you complete the form correctly."
      )
      .validateFieldAlertMessage("Forename is required")
      .validateFieldAlertMessage("Email is required")
      .validateFieldAlertMessage("Message is required")

      // Fill up required fields and validate field error message are gone
      .inputForename("Allen")
      .inputEmail("allen@test.com")
      .inputMessage("This is Test Case 1")
      .validateFieldAlertIsNotDisplayed();
  });

  // This test will run 5 times to ensure 100% pass rate
  for (let i = 1; i <= 5; i++) {
    it(`TC2 - Submit contact with valid input and validate successful submission message, attempt #${i}`, () => {
      // Log attempt
      cy.log("TC2 attempt #: " + i);

      cy.visit("/#/home");
      // validate homepage
      home
        .validateLabelHeader()
        .validateLabelSubheader()
        .validateLabelWelcomeText()
        .validateStartShoppingButton();

      // Generate fake test data
      let name = faker.name.firstName();
      let email = faker.internet.email();
      let message = faker.lorem.sentence();

      // Go to Contact Page and fillup required fields
      contact
        .clickNavigateToContact()
        .validateAlertBanner("We welcome your feedback - tell it how it is.")
        .inputForename(name)
        .inputEmail(email)
        .inputMessage(message)
        .clickSubmit()
        .waitForLoadingToDisappear()

        // Click Submit and validate the success message
        .validateSuccessSubmission(
          `Thanks ${name}, we appreciate your feedback.`
        )
        .validateSuccessfulBackButton();
    });
  }

  it("TC3 - Buy stuffed toys and validate total amount in Cart page", () => {
    cy.visit("/#/home");

    // Navigate to Shop
    shop
      .clickNavigateToShop()

      // Buy 2 pcs Stuffed Frog
      .validateStuffedFrog()
      .clickBuyStuffedFrog(2)

      // Buy 5 pcs Fluffy Bunny
      .validateFluffyBunny()
      .clickBuyFluffyBunny(5)

      // Buy 3 pcs Valentine Bear
      .validateValentineBear()
      .clickBuyValentineBear(3);

    // Go to Cart Page
    cart
      .clickNavigateToCart()
      // Validate Stuffed Frog Price and Subtotal
      .validateSelectedStuffedFrog()
      .validateStuffedFrogSubtotal()
      .validateStuffedFrogPrice()

      // Validate Fluffy Bunny Price and Subtotal
      .validateSelectedFluffyBunny()
      .validateFluffyBunnySubtotal()
      .validateFluffyBunnyPrice()

      // Validate Valentine Bear Price and Subtotal
      .validateSelectedValentineBear()
      .validateValentineBearSubtotal()
      .validateValentineBearPrice()

      // Validate Total of Subtotal then Compare
      .validateTotal();
  });
});
