import React, { FC } from "react";
import Image from "next/image";
import Flex from "../shared/Flex";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import Caption from "../shared/Text/Caption";
import styled from "styled-components";
import message from "antd/lib/message";
import { NavbarTypes, StyledComponentsTypes } from "../../../libs/types";

const MenuRightSide = styled(Flex)`
	position: relative;
	z-index: 5;

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

const SearchInput = styled.input`
	width: 200px;
	height: 42px;
	border: none;
	outline: none;
	border-radius: 4px;
	background: white;
	padding: 12px;
	font-weight: 600;
	transition: 1s;

	@media (max-width: 768px) {
		position: absolute;
		top: 52px;
		right: 0;
		width: 92vw;
	}
`;

const Navbar: FC<NavbarTypes> = ({ setSearchValue, searchValue }) => {
	const handleCopy = () => {
		navigator.clipboard
			.writeText("https://fmovies.to/series/game-of-thrones-92p7q")
			.then(() => {
				message.success("Movie link added to clipboard");
			});
	};
	return (
		<Flex>
			<Logo src="/icons/logo.svg" alt="Game of Thrones Logo" sm="hide" />

			<Logo src="/icons/mobile_logo.png" alt="Game of Thrones Logo" />

			<MenuRightSide gap={36} width="fit-content">
				<SearchInput
					onChange={({ target }) => setSearchValue(target.value)}
					type="text"
					name="search"
					placeholder="type to search..."
					autoFocus
					value={searchValue}
				/>

				<Image
					onClick={handleCopy}
					src="/icons/share.png"
					width={32}
					height={32}
					alt="Share icon"
					className="pointer"
				/>

				<a
					href="https://fmovies.to/series/game-of-thrones-92p7q"
					className="link"
					target="_blank"
					rel="noreferrer"
				>
					<PrimaryButton>
						<Image
							src="/icons/play.png"
							width={12}
							height={12}
							alt="Play icon"
						/>

						<Caption>Watch now</Caption>
					</PrimaryButton>
				</a>
			</MenuRightSide>
		</Flex>
	);
};

export default Navbar;
