import PrimaryButton from "./PrimaryButton";

describe("<PrimaryButton />", () => {
	it("mounts", () => {
		cy.mount(<PrimaryButton>Primary Button</PrimaryButton>);
	});
});
