describe("User not registered in Qantas", () => {
  let jwToken =
    "Bearer token";
  beforeEach(function () {
    // clear cache first and then hits the API with mock response.

    cy.loginAirlineUser();
    cy.visit(Cypress.env());
  });

  // From here we will start writing asserts to test the functionality.
  it("User Not registered in Qantas", function () {
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
    cy.get("#rmt_userList_create_new_user_button")
      .should("contain", "Create New user")
      .click();

    cy.fixture("customerRole-AA").then((customerResponse) => {
      cy.intercept("**/Customer/api/CustomerRole", {
        statucCode: 200,
        body: JSON.stringify(customerResponse),
        headers: {
          authorization: jwToken,
        },
      });
    });

    cy.fixture("loginOption").then((loginoptionResponse) => {
      cy.intercept("**/Customer/api/LoginOption", {
        statucCode: 200,
        body: JSON.stringify(loginoptionResponse),
        headers: {
          authorization: jwToken,
        },
      });
    });

    cy.fixture("customerProductcreate")
      .then((customerProductResponse) => {
        cy.intercept("**/Customer/api/CustomerProduct", {
          statucCode: 200,
          body: JSON.stringify(customerProductResponse),
          headers: {
            authorization: jwToken,
          },
        });
      })
      .as("mockedapi");

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

    //Form Data
    cy.get("#rmt_create_user_input_firstName").type("ALI").should("be.visible");
    cy.get("#rmt_create_user_enable_toggle").click();
    cy.get("#rmt_create_user_input_lastName").type("RAZA").should("be.visible");
    cy.get("#rmt_create_user_input_userName").type("QW2211");
    cy.get("#rmt_create_user_input_employeeNumber")
      .type("111447")
      .should("be.visible");
    cy.get("#rmt_create_user_input_email")
      .type("araza.callrom321@gmail.com")
      .should("be.visible");
    cy.get("#rmt_create_user_input_departmentId")
      .type("IT")
      .should("be.visible");
    cy.get("#rmt_create_user_user_role_select_input").click();
    cy.get('[data-value="f155d8a8-7906-4866-9eac-3a346382ad36"]')
      .should("contain", "Airline Admin")
      .click();
    //  login option
    cy.wait(1000);
    cy.get("#mui-component-select-userLoginOptions").click();
    cy.get(".MuiListItemText-root > .MuiTypography-root").click();
    // To close the open multiselect and proceed to other asserts.
    cy.get("body").click();
    cy.get("#rmt_create_user_functionality_product_enable_1").click();
    cy.get("#rmt_create_user_functionality_product_read_only_1").click();
    cy.get(
      "#rmt_create_user_functionality_product_subscribe_to_change_1",
    ).click();
    cy.get("#rmt_create_user_functionality_product_email_input_0").clear();
    cy.get("#rmt_create_user_functionality_product_email_input_0")
      .type("ali.raza4321@gmail.com")
      .should("be.visible");

    cy.fixture("notRegistereduser").then((createUserResponse) => {
      cy.intercept("**/Customer/api/Customer", {
        statucCode: 200,
        body: JSON.stringify(createUserResponse),
        headers: {
          authorization: jwToken,
        },
      });
    });

    cy.get('[data-testid="createUser"]')
      .should("contain", " Create user")
      .click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain",
      "User is not registered in Qantas Group Travel",
    );
  });
});
