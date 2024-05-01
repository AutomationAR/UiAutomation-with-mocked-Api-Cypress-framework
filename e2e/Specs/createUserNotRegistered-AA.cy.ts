describe("User not registered in Qantas", () => {
  let jwToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlSWQiOiJmMTU1ZDhhOC03OTA2LTQ4NjYtOWVhYy0zYTM0NjM4MmFkMzYiLCJSb2xlTmFtZSI6IkFpcmxpbmUgQWRtaW4iLCJTeXN0ZW1JZCI6IkdSUFFBVSIsIkFpcmxpbmVDb2RlIjoiUUYiLCJVc2VySWQiOiIzOTNkYjQ2ZC01NzI4LTRmNGUtNmY0NS0wOGRiNmIxZDA5YzciLCJTeXN0ZW1OYW1lIjoiUWFudGFzIEdyb3VwIFRyYXZlbCIsIk5hbWUiOiJBQTAwMDAiLCJGaXJzdE5hbWUiOiJBbGkgUmF6YSIsIkNsYWltUmlnaHRzIjoie1wiQ2xhaW1SZXNvdXJjZVVybHNcIjpbe1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyL3Jlc2V0cGFzc3dvcmQvKGlkKVwiLFwiSHR0cFZlcmJcIjpcIlBPU1RcIn0se1wiVXJpXCI6XCIvR3JvdXBDYXBhY2l0eS9hcGkvR3JvdXBDYXBhY2l0eVwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9ub3RpZmljYXRpb24vR3JvdXBDYXBhY2l0eUh1YlwiLFwiSHR0cFZlcmJcIjpcIlBPU1RcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0FpcmxpbmVQcm9kdWN0XCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9EYXNoYm9hcmRcIixcIkh0dHBWZXJiXCI6XCJHRVRcIn0se1wiVXJpXCI6XCIvbm90aWZpY2F0aW9uL0dyb3VwQ2FwYWNpdHlIdWIvbmVnb3RpYXRlXCIsXCJIdHRwVmVyYlwiOlwiUE9TVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXIvdXBkYXRlYXV0aHVzZXJcIixcIkh0dHBWZXJiXCI6XCJQVVRcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyXCIsXCJIdHRwVmVyYlwiOlwiUE9TVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXIvdXNlcnN5bmNcIixcIkh0dHBWZXJiXCI6XCJQVVRcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyXCIsXCJIdHRwVmVyYlwiOlwiUFVUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lci9jaGFuZ2VwYXNzd29yZFwiLFwiSHR0cFZlcmJcIjpcIlBVVFwifSx7XCJVcmlcIjpcIi9Hcm91cENhcGFjaXR5L2FwaS9Hcm91cENhcGFjaXR5XCIsXCJIdHRwVmVyYlwiOlwiUE9TVFwifSx7XCJVcmlcIjpcIi9ub3RpZmljYXRpb24vR3JvdXBDYXBhY2l0eUh1YlwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9ub3RpZmljYXRpb24vR3JvdXBDYXBhY2l0eUh1YlwiLFwiSHR0cFZlcmJcIjpcIkRFTEVURVwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQWlybGluZVwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXIvYXV0aHNlcnZpY2UvKHVzZXJuYW1lKS8oZW1haWxBZGRyZXNzKVwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQWlybGluZVwiLFwiSHR0cFZlcmJcIjpcIlBVVFwifSx7XCJVcmlcIjpcIi9Hcm91cENhcGFjaXR5L2FwaS9Hcm91cENhcGFjaXR5L2V4Y2VsLyhmaWxlV2l0aERhdGEpXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL05vdGlmaWNhdGlvbi9hcGkvTm90aWZpY2F0aW9uXCIsXCJIdHRwVmVyYlwiOlwiUFVUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9DdXN0b21lclJvbGVcIixcIkh0dHBWZXJiXCI6XCJHRVRcIn0se1wiVXJpXCI6XCIvQ3VzdG9tZXIvYXBpL0N1c3RvbWVyLyhwYWdlTnVtYmVyKS8ocGFnZVNpemUpXCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9LHtcIlVyaVwiOlwiL0N1c3RvbWVyL2FwaS9Mb2dpbk9wdGlvblwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXIvKHNlYXJjaFF1ZXJ5KS8ocGFnZU51bWJlcikvKHBhZ2VTaXplKVwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXIvKGlkKVwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXIvY2hhbmdlcGFzc3dvcmRcIixcIkh0dHBWZXJiXCI6XCJQT1NUXCJ9LHtcIlVyaVwiOlwiL25vdGlmaWNhdGlvbi9Hcm91cENhcGFjaXR5SHViXCIsXCJIdHRwVmVyYlwiOlwiQ09OTkVDVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXIvdXNlcmFjY2Vzc1wiLFwiSHR0cFZlcmJcIjpcIlBVVFwifSx7XCJVcmlcIjpcIi9Ob3RpZmljYXRpb24vYXBpL05vdGlmaWNhdGlvblwiLFwiSHR0cFZlcmJcIjpcIkdFVFwifSx7XCJVcmlcIjpcIi9DdXN0b21lci9hcGkvQ3VzdG9tZXJQcm9kdWN0XCIsXCJIdHRwVmVyYlwiOlwiR0VUXCJ9XSxcIkRpc3BsYXlPcHRpb25TZXR0aW5nXCI6W3tcIkRpc3BsYXlPcHRpb25UeXBlXCI6XCJVU1JUWVBERFwifSx7XCJEaXNwbGF5T3B0aW9uVHlwZVwiOlwiRU5CVVNSVEdcIn0se1wiRGlzcGxheU9wdGlvblR5cGVcIjpcIlBXRExPQ1RHXCJ9LHtcIkRpc3BsYXlPcHRpb25UeXBlXCI6XCJMR05PUFRNU1wifSx7XCJEaXNwbGF5T3B0aW9uVHlwZVwiOlwiRlVOUkRPQ0JcIn0se1wiRGlzcGxheU9wdGlvblR5cGVcIjpcIkZVTkVOQkNCXCJ9LHtcIkRpc3BsYXlPcHRpb25UeXBlXCI6XCJQV0RFWFBUR1wifV19IiwiZXhwIjoxNzMxNTYyODAwLCJpc3MiOiJSZXZlbnVlTWFuYWdlbWVudFRvb2wiLCJhdWQiOiJSZXZlbnVlTWFuYWdlbWVudFRvb2xVc2VyIn0.v5IN5NVbjeF2ENATvdpWIBY3u5NzCGMnkmaJdtSGPUs";
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
