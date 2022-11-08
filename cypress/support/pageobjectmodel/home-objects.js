class HomeObjects {

    home = {
        labelHeader: () => cy.get("h1"),
        labelSubHeader: () => cy.get("small[class='muted']"),
        btnStartShopping: () => cy.get("a:contains('Start Shopping')"),
        labelWelcomeText: () => cy.get("p[class='lead']"),
    }

}

export default new HomeObjects