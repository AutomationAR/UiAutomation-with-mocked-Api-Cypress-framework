describe("searchUser", () => {
  let jwToken =
    "Bearer token";
  beforeEach(function () {
    cy.login.User();
    cy.visit(Cypress.env());
  });

  // From here we will start writing asserts to test the functionality.
  it("Search a User", function () {
    cy.get("#rmt_dashboard_card_3 > .MuiPaper-root > .MuiStack-root").should(
      "contain",
      "Users details",
    );
    cy.get("#rmt_dashboard_card_3 > .MuiPaper-root > .MuiStack-root").click();

    cy.fixture("getUserList")
      .then((usersListResponse) => {
        cy.intercept("**/Customer/1/10", {
          statucCode: 200,
          body: JSON.stringify(usersListResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("apiUsersDetails");

    cy.fixture("getUserList")
      .then((usersListResponse) => {
        cy.intercept("**/Customer/1/10", {
          statucCode: 200,
          body: JSON.stringify(usersListResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("apiUsersDetails");
    cy.fixture("getUserList-search1")
      .then((usersearchResponse) => {
        cy.intercept("**/Customer/api/Customer/r/1/10", {
          statucCode: 200,
          body: JSON.stringify(usersearchResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("apiUsersSearch");
    cy.fixture("getUserList-search2")
      .then((usersearchResponse) => {
        cy.intercept("**/Customer/api/Customer/ra/1/10", {
          statucCode: 200,
          body: JSON.stringify(usersearchResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("apiUsersSearch");
    cy.fixture("searchuser")
      .then((usersearchResponse) => {
        cy.intercept("**/Customer/api/Customer/raz/1/10", {
          statucCode: 200,
          body: JSON.stringify(usersearchResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("apiUsersSearch");

    cy.fixture("searchuser")
      .then((usersearchResponse) => {
        cy.intercept("**/Customer/api/Customer/raza/1/10", {
          statucCode: 200,
          body: JSON.stringify(usersearchResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("apiUsersSearch");

    cy.get("#search_user_textbox")
      .type("raza")
      .should("be.visible");
  });
});
