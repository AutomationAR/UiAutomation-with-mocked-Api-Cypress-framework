describe("Update user Details", () => {
  let jwToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlSWQiOiIzYTBkMDQ0Yi1lYzBhLTQ2YmQtYjdjNS1hZWQ1MWIxODM4OGYiLCJSb2xlTmFtZSI6IkNhbHJvbSBBZG1pbiIsIlN5c3RlbUlkIjoiR1JQUUFVIiwiQWlybGluZUNvZGUiOiJRRiIsIlVzZXJJZCI6ImIwMWVhN2ZmLTk0MTktNDg4My04MDY0LTIwM2RlZjgwODZlYiIsIlN5c3RlbU5hbWUiOiJRYW50YXMgR3JvdXAgVHJhdmVsIiwiTmFtZSI6IkNhbHJvbSIsIkZpcnN0TmFtZSI6IkNhbHJvbSBVc2VyIiwiQ2xhaW1SaWdodHMiOiJ7XCJDbGFpbVJlc291cmNlVXJsc1wiOlt7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXIvKHBhZ2VOdW1iZXIpLyhwYWdlU2l6ZSlcIixcIkh0dHBWZXJiXCI6XCJHRVRcIn0se1wiVXJpXCI6XCIvbm90aWZpY2F0aW9uL0dyb3VwQ2FwYWNpdHlIdWJcIixcIkh0dHBWZXJiXCI6XCJERUxFVEVcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0FpcmxpbmVcIixcIkh0dHBWZXJiXCI6XCJQVVRcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyL3VwZGF0ZWF1dGh1c2VyXCIsXCJIdHRwVmVyYlwiOlwiUFVUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9BaXJsaW5lXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lclByb2R1Y3RcIixcIkh0dHBWZXJiXCI6XCJHRVRcIn0se1wiVXJpXCI6XCIvbm90aWZpY2F0aW9uL0dyb3VwQ2FwYWNpdHlIdWJcIixcIkh0dHBWZXJiXCI6XCJDT05ORUNUXCJ9LHtcIlVyaVwiOlwiL25vdGlmaWNhdGlvbi9Hcm91cENhcGFjaXR5SHViXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lci8oaWQpXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9BaXJsaW5lUHJvZHVjdFwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXJSb2xlXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL25vdGlmaWNhdGlvbi9Hcm91cENhcGFjaXR5SHViL25lZ290aWF0ZVwiLFwiSHR0cFZlcmJcIjpcIlBPU1RcIn0se1wiVXJpXCI6XCIvR3JvdXBDYXBhY2l0eS9hcGkvR3JvdXBDYXBhY2l0eVwiLFwiSHR0cFZlcmJcIjpcIlBPU1RcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyXCIsXCJIdHRwVmVyYlwiOlwiUFVUXCJ9LHtcIlVyaVwiOlwiL05vdGlmaWNhdGlvbi9hcGkvTm90aWZpY2F0aW9uXCIsXCJIdHRwVmVyYlwiOlwiUFVUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lci9hdXRoc2VydmljZS8odXNlcm5hbWUpLyhlbWFpbEFkZHJlc3MpXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lci91c2Vyc3luY1wiLFwiSHR0cFZlcmJcIjpcIlBVVFwifSx7XCJVcmlcIjpcIi9ub3RpZmljYXRpb24vR3JvdXBDYXBhY2l0eUh1YlwiLFwiSHR0cFZlcmJcIjpcIlBPU1RcIn0se1wiVXJpXCI6XCIvTm90aWZpY2F0aW9uL2FwaS9Ob3RpZmljYXRpb25cIixcIkh0dHBWZXJiXCI6XCJHRVRcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyL3Jlc2V0cGFzc3dvcmQvKGlkKVwiLFwiSHR0cFZlcmJcIjpcIlBPU1RcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyL2NoYW5nZXBhc3N3b3JkXCIsXCJIdHRwVmVyYlwiOlwiUFVUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lclwiLFwiSHR0cFZlcmJcIjpcIlBPU1RcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyL2NoYW5nZXBhc3N3b3JkXCIsXCJIdHRwVmVyYlwiOlwiUE9TVFwifSx7XCJVcmlcIjpcIi9Hcm91cENhcGFjaXR5L2FwaS9Hcm91cENhcGFjaXR5L2V4Y2VsLyhmaWxlV2l0aERhdGEpXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lci91c2VyYWNjZXNzXCIsXCJIdHRwVmVyYlwiOlwiUFVUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lci8oc2VhcmNoUXVlcnkpLyhwYWdlTnVtYmVyKS8ocGFnZVNpemUpXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9EYXNoYm9hcmRcIixcIkh0dHBWZXJiXCI6XCJHRVRcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0xvZ2luT3B0aW9uXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0dyb3VwQ2FwYWNpdHkvYXBpL0dyb3VwQ2FwYWNpdHlcIixcIkh0dHBWZXJiXCI6XCJHRVRcIn1dLFwiRGlzcGxheU9wdGlvblNldHRpbmdcIjpbe1wiRGlzcGxheU9wdGlvblR5cGVcIjpcIlBFUlVTUkREXCJ9LHtcIkRpc3BsYXlPcHRpb25UeXBlXCI6XCJBUkxORlVOQ1wifSx7XCJEaXNwbGF5T3B0aW9uVHlwZVwiOlwiRlVORU5CQ0JcIn0se1wiRGlzcGxheU9wdGlvblR5cGVcIjpcIkxHTk9QVE1TXCJ9LHtcIkRpc3BsYXlPcHRpb25UeXBlXCI6XCJGVU5SRE9DQlwifSx7XCJEaXNwbGF5T3B0aW9uVHlwZVwiOlwiVVNSVFlQRERcIn0se1wiRGlzcGxheU9wdGlvblR5cGVcIjpcIlBXRExPQ1RHXCJ9LHtcIkRpc3BsYXlPcHRpb25UeXBlXCI6XCJQV0RFWFBUR1wifSx7XCJEaXNwbGF5T3B0aW9uVHlwZVwiOlwiRU5CVVNSVEdcIn1dfSIsImV4cCI6MTc0MTU4OTE2OCwiaXNzIjoiUmV2ZW51ZU1hbmFnZW1lbnRUb29sIiwiYXVkIjoiUmV2ZW51ZU1hbmFnZW1lbnRUb29sVXNlciJ9.TYJj48FjmQTSpHG32qH26gL_Pwsf0WCIsaBhx5lkIYY";
  beforeEach(function () {
    cy.loginCalromUser();
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
          "**/Customer/api/Customer/authservice/AA0000/araza.calrom123@gmail.com",
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
