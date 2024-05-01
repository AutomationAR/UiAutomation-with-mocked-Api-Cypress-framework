/// <reference types="cypress" />


Cypress.Commands.add('loginUser', ()=>{

    cy.fixture("cuserDashboard").then((dashboardResponse) => {
        cy.intercept("**/Dashboard", {
          statucCode: 200,
          body: JSON.stringify(dashboardResponse),
          headers: {
            authorization:
              "Bearer token",
          },
        });
      }).as('apidashboard');
      cy.fixture("notification").then((notificationResponse) => {
        cy.intercept("**/notification", {
          statucCode: 200,
          body: JSON.stringify(notificationResponse),
          headers: {
            authorization:
              "Bearer token",
          },
        });
      }).as('apinotification');
      cy.fixture("negotiate").then((negotiateResponse) => {
        cy.intercept(
          "**/negotiateVersion=1",
          {
            statucCode: 200,

            body: JSON.stringify(negotiateResponse),
            headers: {
              authorization:
                "Bearer token",
            },
          }
        );
      }).as('apinegotiate');
});

Cypress.Commands.add('loginAirlineUser', ()=>{

    cy.fixture("dashboardAA").then((dashboardResponse) => {
        cy.intercept("**/Dashboard", {
          statucCode: 200,
          body: JSON.stringify(dashboardResponse),
          headers: {
            authorization:
              "Bearer token",
          },
        });
      }).as('apidashboard');
      cy.fixture("notification").then((notificationResponse) => {
        cy.intercept("**/notification", {
          statucCode: 200,
          body: JSON.stringify(notificationResponse),
          headers: {
            authorization:
              "Bearer token",
          },
        });
      }).as('apinotification');
      cy.fixture("negotiate").then((negotiateResponse) => {
        cy.intercept(
          "**/negotiateVersion=1",
          {
            statucCode: 200,

            body: JSON.stringify(negotiateResponse),
            headers: {
              authorization:
                "Bearer token",
            },
          }
        );
      }).as('apinegotiate');
});

Cypress.Commands.add('loginRevmanUser', ()=>{

    cy.fixture("dashboardRM").then((dashboardResponse) => {
        cy.intercept("**/Dashboard", {
          statucCode: 200,
          body: JSON.stringify(dashboardResponse),
          headers: {
            authorization:
              "Bearer token",
          },
        });
      }).as('apidashboard');
      cy.fixture("notification").then((notificationResponse) => {
        cy.intercept("**/notification", {
          statucCode: 200,
          body: JSON.stringify(notificationResponse),
          headers: {
            authorization:
              "Bearer token",
          },
        });
      }).as('apinotification');
      cy.fixture("negotiate").then((negotiateResponse) => {
        cy.intercept(
          "**/negotiateVersion=1",
          {
            statucCode: 200,

            body: JSON.stringify(negotiateResponse),
            headers: {
              authorization:
              "Bearer token",
            },
          }
        );
      }).as('apinegotiate');
    });
      Cypress.Commands.add('loginAirlineUsers', ()=>{

        cy.fixture("dashboardAAunchecked").then((dashboardResponse) => {
            cy.intercept("**/Dashboard", {
              statucCode: 200,
              body: JSON.stringify(dashboardResponse),
              headers: {
                authorization:
                  "Bearer token",
              },
            });
          }).as('apidashboard');
          cy.fixture("notification").then((notificationResponse) => {
            cy.intercept("**/notification", {
              statucCode: 200,
              body: JSON.stringify(notificationResponse),
              headers: {
                authorization:
                  "Bearer token",
              },
            });
          }).as('apinotification');
          cy.fixture("negotiate").then((negotiateResponse) => {
            cy.intercept(
              "**/negotiateVersion=1",
              {
                statucCode: 200,
    
                body: JSON.stringify(negotiateResponse),
                headers: {
                  authorization:
                    "Bearer token",
                },
              }
            );
          }).as('apinegotiate');
    });
    Cypress.Commands.add('loginAirlineUsercap', ()=>{

      cy.fixture("dashboardAA").then((dashboardResponse) => {
          cy.intercept("**/Dashboard", {
            statucCode: 200,
            body: JSON.stringify(dashboardResponse),
            headers: {
              authorization:
                "Bearer token",
            },
          });
        }).as('apidashboard');
        cy.fixture("notification").then((notificationResponse) => {
          cy.intercept("**/notification", {
            statucCode: 200,
            body: JSON.stringify(notificationResponse),
            headers: {
              authorization:
                "Bearer token",
            },
          });
        }).as('apinotification');
        cy.fixture("negotiate").then((negotiateResponse) => {
          cy.intercept(
            "**/negotiateVersion=1",
            {
              statucCode: 200,
  
              body: JSON.stringify(negotiateResponse),
              headers: {
                authorization:
                  "Bearer token",
              },
            }
          );
        }).as('apinegotiate');
  });
  Cypress.Commands.add('loginRMUser', ()=>{

    cy.fixture("dashboardAA").then((dashboardResponse) => {
        cy.intercept("**/Dashboard", {
          statucCode: 200,
          body: JSON.stringify(dashboardResponse),
          headers: {
            authorization:
              "Bearer token",
          },
        });
      }).as('apidashboard');
      cy.fixture("notification").then((notificationResponse) => {
        cy.intercept("**/notification", {
          statucCode: 200,
          body: JSON.stringify(notificationResponse),
          headers: {
            authorization:
              "Bearer token",
          },
        });
      }).as('apinotification');
      cy.fixture("negotiate").then((negotiateResponse) => {
        cy.intercept(
          "**negotiateVersion=1",
          {
            statucCode: 200,

            body: JSON.stringify(negotiateResponse),
            headers: {
              authorization:
                "Bearer token",
            },
          }
        );
      }).as('apinegotiate');
});