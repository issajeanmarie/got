import SecondaryButton from "./SecondaryButton";

describe("<SecondaryButton />", () => {
	it("mounts", () => {
		cy.mount(<SecondaryButton>Secondary Button</SecondaryButton>);
	});
});
