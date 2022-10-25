import { SetStateAction } from "react";
import Card from "./Card";

describe("<Card />", () => {
	it("mounts", () => {
		cy.mount(
			<Card
				setIsVisible={function (value: SetStateAction<boolean>): void {
					throw new Error("Function not implemented.");
				}}
				name={undefined}
				url={""}
				setContentToDisplay={function (value: SetStateAction<string>): void {
					throw new Error("Function not implemented.");
				}}
				content={[]}
				numberedElement={{}}
				icon={""}
			/>
		);
	});
});
