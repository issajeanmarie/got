import { SetStateAction } from "react";
import Drawer from "./Drawer";

describe("<Drawer />", () => {
	it("mounts", () => {
		cy.mount(
			<Drawer
				isVisible={false}
				setIsVisible={function (value: SetStateAction<boolean>): void {
					throw new Error("Function not implemented.");
				}}
				url={null}
				icon={""}
			/>
		);
	});
});
