class ContactObjects {
  contact = {
    textForename: () => cy.get("#forename"),
    textEmail: () => cy.get("#email"),
    textMessage: () => cy.get("#message"),
    btnSubmit: () => cy.get(".btn-contact"),
    textAlertBanner: () => cy.get("#header-message"),
    textFieldAlert: () => cy.get(".help-inline"),
    textSuccessBanner: () => cy.get(".alert-success"),
    btnBack: ()  => cy.get("[ng-click='goBack()']"),
    btnContact: () => cy.get("#nav-contact"),
  };
}

export default new ContactObjects();
