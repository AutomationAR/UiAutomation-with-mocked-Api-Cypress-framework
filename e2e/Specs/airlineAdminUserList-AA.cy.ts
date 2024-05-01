describe("AA-UserList", () => {
  let jwToken =
    "Bearer token";

  beforeEach(function () {
    //cy.exec("npm cache clear --force");

    cy.loginAirlineUser();
    cy.visit(Cypress.env());
  });
  it("Airline Admin UserList", function () {
    cy.get("#rmt_dashboard_card_3 > .MuiPaper-root > .MuiStack-root").should(
      "contain",
      "Users details",
    );
    cy.get("#rmt_dashboard_card_3 > .MuiPaper-root > .MuiStack-root").click();

    cy.fixture("airlineAdminUserList")
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

    cy.get("#cell-5-c45ca084-488a-412a-eb24-08db715fad4d > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-a3ad4a75-e4c6-49ad-06cb-08db983f9b1b > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-393db46d-5728-4f4e-6f45-08db6b1d09c7 > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-a05bdd30-4f0b-4a6a-6f46-08db6b1d09c7 > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-7c379ff3-abbc-4f9c-6f4a-08db6b1d09c7 > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-32880f0f-d39c-4511-f17f-08db9403aa3f > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-efcc9f8d-5729-479b-06ca-08db983f9b1b > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-bdd5e361-aa26-4d2b-06cc-08db983f9b1b > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-9c486590-7c24-4509-c5a5-08db73e569a0 > div").should(
      "not.contain",
      ". Admin",
    );
    cy.get("#cell-5-8ac128fc-0ba5-4d2d-6f42-08db6b1d09c7 > div").should(
      "not.contain",
      ". Admin",
    );
  });
});
