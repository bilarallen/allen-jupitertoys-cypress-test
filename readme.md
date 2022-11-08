# Allen Jupiter Cypress Test

This is a simple automated test written in cypress.io in JS language binding. The AUT is a website from https://jupiter.cloud.planittesting.com/#/


## Test Cases

The following are the Test Cases that are covered by the automation:

 1. TC1- Validate field error messages for contact page
 2. TC2 - Submit contact with valid input and validate successful submission message
 3. TC3 - Buy stuffed toys and validate total amount in Cart page

## Test Structure

The test are structured using a page object model utilizing methods and class to separate the page-actions and page-object for a much readable test file.

 - Under support folder is a folder named `pageobjectmodel`
 - In `pageobjectmodel`there are multiple JS files `-objects.js`are files that stores the UI selector of the page element while `-actions.js`are files of page-actions.
 - Under `e2e` folder is the test file where test cases are divided per `it()`block

## CI/CD
This automation project is publicly hosted in github repo where `github actions` for CD are being utilized and `github pages` for publishing the report. Sample report of this test can be accessed here: https://bilarallen.github.io/allen-jupitertoys-cypress-test/