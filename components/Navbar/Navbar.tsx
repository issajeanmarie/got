import React, { FC } from "react";
import Image from "next/image";
import Flex from "../shared/Flex";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import Caption from "../shared/Text/Caption";
import styled from "styled-components";
import message from "antd/lib/message";
import { NavbarTypes, StyledComponentsTypes } from "../../libs/types";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomLink from "../shared/Text/CustomLink";

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
	color: black;
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

	const router = useRouter();
	const isActive = (url: string) => router?.pathname === url;

	const links = [
		{ key: 0, name: "Houses", url: "/" },
		{ key: 1, name: "Books", url: "/books" },
		{ key: 2, name: "Characters", url: "/characters" },
	];

	return (
		<Flex>
			<Flex justify="none" gap={23}>
				<Link href="/">
					<a>
						<Logo src="/icons/logo.svg" alt="Game of Thrones Logo" sm="hide" />

						<Logo src="/icons/mobile_logo.png" alt="Game of Thrones Logo" />
					</a>
				</Link>

				{links.map((link) => (
					<Link key={link.key} href={link.url}>
						<CustomLink color="white" weight={isActive(link.url) ? 600 : 300}>
							{link.name}
						</CustomLink>
					</Link>
				))}
			</Flex>

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
