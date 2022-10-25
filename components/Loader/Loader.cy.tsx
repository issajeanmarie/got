import { SetStateAction } from "react";
import Loader from "./Loader";

describe("<Loader />", () => {
	it("mounts", () => {
		cy.mount(<Loader />);
	});
});
