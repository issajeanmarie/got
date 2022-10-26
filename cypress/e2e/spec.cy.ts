describe("Visit home page", () => {
	it("Finds Game of thrones text", () => {
		cy.visit("localhost:3000");
		cy.contains("Game of Thrones");

		// Tests search input on home page
		cy.get("input").type("Unknown house");
		cy.get("input").should("have.value", "Unknown house");
		cy.contains("0 Houses");

		// Visiting books page and verifying content

		cy.contains("Books").click();

		cy.visit("localhost:3000/books");
		cy.url().should("include", "/books");
		cy.contains("Game of Thrones books");

		cy.get("input").type("Unknown book");
		cy.get("input").should("have.value", "Unknown book");
		cy.contains("0 Books");

		//Visiting characters page
		cy.contains("Characters").click();

		cy.visit("localhost:3000/characters");
		cy.url().should("include", "/characters");
		cy.contains("Game of Thrones characters");

		cy.get("input").type("Unknown character");
		cy.get("input").should("have.value", "Unknown character");
		cy.contains("0 Characters");
	});
});
