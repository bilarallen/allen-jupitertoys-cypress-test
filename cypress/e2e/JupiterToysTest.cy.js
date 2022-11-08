import home from "../support/pageobjectmodel/home-actions";
import contact from "../support/pageobjectmodel/contact-actions";
describe("Jupiter Toys Tests", () => {
  it.only("TC1- Validate field error messages for contact page", () => {
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

  it("TC2 - Submit contact with valid input and validate successful submission message", () => {});

  it("TC3 - Buy stuffed toys and validate total amount in Cart page", () => {});
});
