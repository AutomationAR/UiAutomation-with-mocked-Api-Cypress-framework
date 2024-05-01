describe("Update user Details", () => {
  let jwToken =
    "Bearer token";
  beforeEach(function () {
    cy.loginUser();
    cy.visit(Cypress.env());
  });
  it("Update User Details", function () {
    cy.get("#rmt_dashboard_card_3 > .MuiPaper-root > .MuiStack-root").should(
      "contain",
      "Users details",
    );
    cy.get("#rmt_dashboard_card_3 > .MuiPaper-root > .MuiStack-root").click();

    cy.fixture("getUserList")
      .then((usersListResponse) => {
        cy.log("getUserList", usersListResponse);

        cy.intercept("**/Customer/1/10", {
          statucCode: 200,
          body: JSON.stringify(usersListResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("mockedUserList");
    cy.fixture("loginAirlineoption")
      .then((customerProductResponse) => {
        cy.intercept(
          "**/Customer/api/LoginOption/f155d8a8-7906-4866-9eac-3a346382ad36",
          {
            statucCode: 200,
            body: JSON.stringify(customerProductResponse),
            headers: {
              authorization: jwToken,
            },
          },
        );
      })
      .as("mockedapi");

    cy.fixture("customerRole")
      .then((customerRoleResponse) => {
        cy.intercept("**/Customer/api/CustomerRole", {
          statucCode: 200,
          body: JSON.stringify(customerRoleResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("mockedapicustomerRoleUSER");

    cy.fixture("userupdate")
      .then((updateUserResponse) => {
        cy.intercept(
          "**/Customer/api/Customer/393db46d-5728-4f4e-6f45-08db6b1d09c7",
          {
            statucCode: 200,
            body: JSON.stringify(updateUserResponse),
            headers: {
              authorization: jwToken,
            },
          },
        );
      })
      .as("mockedapiUSER");

    cy.fixture("functionalityUserupdate")
      .then((funUserResponse) => {
        cy.intercept("**/Customer/api/CustomerProduct", {
          statucCode: 200,
          body: JSON.stringify(funUserResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("mockedapifunctionalityUSER");

    cy.fixture("fixtureloginoptionUser")
      .then((loginUserResponse) => {
        cy.intercept("**/Customer/api/LoginOption", {
          statucCode: 200,
          body: JSON.stringify(loginUserResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("mockedapiloginUSER");

    cy.fixture("userupdate")
      .then((updateUserResponse) => {
        cy.intercept(
          "**/Customer/api/Customer/393db46d-5728-4f4e-6f45-08db6b1d09c7",
          {
            statucCode: 200,
            body: JSON.stringify(updateUserResponse),
            headers: {
              authorization: jwToken,
            },
          },
        );
      })
      .as("mockedapiUSER");

    cy.get("#cell-2-393db46d-5728-4f4e-6f45-08db6b1d09c7")
      .should("contain", "Ali Raza")
      .click();
    cy.get("#rmt_create_user_input_firstName").clear();
    cy.get("#rmt_create_user_input_firstName").type("ALI").should("be.visible");
    cy.get("#rmt_create_user_input_lastName").clear();
    cy.get("#rmt_create_user_input_lastName")
      .type("Ghaffar")
      .should("be.visible");
    cy.get("#rmt_create_user_input_employeeNumber").clear();
    cy.get("#rmt_create_user_input_employeeNumber")
      .type("111777")
      .should("be.visible");
    cy.get("#rmt_create_user_input_departmentId").clear();
    cy.get("#rmt_create_user_input_departmentId")
      .type("QA")
      .should("be.visible");
    cy.get(
      "#rmt_create_user_functionality_product_subscribe_to_change_1",
    ).click();
    cy.get("#rmt_create_user_functionality_product_email_input_0").clear();
    cy.get("#rmt_create_user_functionality_product_email_input_0")
      .type("ali.raza123@gmail.com")
      .should("be.visible");

    cy.fixture("synceedUser")
      .then((synUserResponse) => {
        cy.intercept("**/Customer/api/Customer/usersync", {
          statucCode: 200,
          body: JSON.stringify(synUserResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("mockedapisynUSER");

    cy.fixture("updateauthuser")
      .then((updateauthuserResponse) => {
        cy.intercept("**/Customer/api/Customer/updateauthuser", {
          statucCode: 200,
          body: JSON.stringify(updateauthuserResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("mockedapiauth");

    cy.fixture("customerUpdate")
      .then((customerUpdateResponse) => {
        cy.intercept("**/Customer/api/Customer", {
          statucCode: 200,
          body: JSON.stringify(customerUpdateResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("mockedapiauth");

    cy.fixture("updatedUser")
      .then((updateUserResponse) => {
        cy.intercept(
          "**/AA0000/araza.calrom123@gmail.com",
          {
            statucCode: 200,
            body: JSON.stringify(updateUserResponse),
            headers: {
              authorization: jwToken,
            },
          },
        );
      })
      .as("mockedapiUSER");

    cy.get('[data-testid="updateUser"]').click();
    cy.get(
      ".css-1wqj0lr > .MuiContainer-root > .MuiStack-root > a > .MuiTypography-root",
    ).should("contain", " Revenue Management");
    cy.get(
      ".css-1wqj0lr > .MuiContainer-root > .MuiStack-root > a > .MuiTypography-root",
    ).click();
    cy.get(".Toastify__toast-body").should(
      "contain",
      "User updated successfully.",
    );
  });
});
