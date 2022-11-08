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

  waitForLoadingToDisappear() {
    contactObjects.contact
      .progressBar()
      .should("be.visible")
      .then(() => {
        contactObjects.contact.progressBar().should("not.exist");
      });

    return this;
  }

  validateSuccessSubmission(name) {
    contactObjects.contact.textSuccessBanner().should("contain.text", name);

    return this;
  }

  validateSuccessfulBackButton() {
    contactObjects.contact.btnBack().should("be.visible");

    return this;
  }
}

export default new ContactActions();
