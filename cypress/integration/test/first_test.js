describe("Form test", () => {
    it("Can fill the form", () => {
      cy.visit("www.google.com");
      cy.get("form");

    });
  });