import contactObjects from "./contact-objects";
class ContactActions {
  inputForename(forename) {
    contactObjects.contact.textForename().type(forename);

    return this;
  }

  inputEmail(email) {
    contactObjects.contact.textEmail().type(email);

    return this;
  }

  inputMessage(message) {
    contactObjects.contact.textMessage().type(message);

    return this;
  }

  clickSubmit() {
    contactObjects.contact.btnSubmit().click();

    return this;
  }

  validateFieldAlertMessage(alertMessage) {
    contactObjects.contact
      .textFieldAlert()
      .should("contain.text", alertMessage);

    return this;
  }

  validateFieldAlertIsNotDisplayed() {
    contactObjects.contact.textFieldAlert().should("not.exist");

    return this;
  }

  clickNavigateToContact() {
    contactObjects.contact.btnContact().click();

    cy.url().should("contain", "/#/contact");

    return this;
  }

  validateAlertBanner(bannerText) {
    contactObjects.contact.textAlertBanner().should("contain.text", bannerText);

    return this;
  }
}

export default new ContactActions();
