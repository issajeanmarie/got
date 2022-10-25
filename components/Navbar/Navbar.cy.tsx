import { SetStateAction } from "react";
import Navbar from ".";

describe("<Navbar />", () => {
	it("mounts", () => {
		cy.mount(<Navbar setSearchValue={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
        } } searchValue={""} />);
	});
});
