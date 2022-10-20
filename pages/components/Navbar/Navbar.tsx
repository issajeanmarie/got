import React, { FC } from "react";
import Image from "next/image";
import Flex from "../shared/Flex";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import Caption from "../shared/Text/Caption";
import styled from "styled-components";
import { StyledComponentsTypes } from "../../../libs/types";

const MenuRightSide = styled(Flex)`
	@media (max-width: 768px) {
		gap: 24px;
	}
`;

const Logo = styled.img`
	width: 200px;
	display: ${(props: StyledComponentsTypes) =>
		props.sm !== "hide" ? "none" : "block"};

	@media (max-width: 768px) {
		width: 40px;
		display: ${(props) => (props.sm === "hide" ? "none" : "block")};
	}
`;

const Navbar: FC = () => {
	return (
		<Flex>
			<Logo src="/icons/logo.svg" alt="Game of Thrones Logo" sm="hide" />

			<Logo src="/icons/mobile_logo.png" alt="Game of Thrones Logo" />

			<MenuRightSide gap={36} width="fit-content">
				<Image
					src="/icons/search.png"
					width={32}
					height={32}
					alt="Search icon"
				/>

				<Image src="/icons/share.png" width={32} height={32} alt="Share icon" />

				<PrimaryButton>
					<Image src="/icons/play.png" width={12} height={12} alt="Play icon" />

					<Caption>Watch now</Caption>
				</PrimaryButton>
			</MenuRightSide>
		</Flex>
	);
};

export default Navbar;
