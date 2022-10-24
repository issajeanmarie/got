import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../themes/colors";
import { DrawerTypes, StyledComponentsTypes } from "../../../libs/types";
import Flex from "../shared/Flex";
import Section from "../shared/Section";
import SubTitle from "../shared/Text/SubTitle";
import Text from "../shared/Text/Text";
import Caption from "../shared/Text/Caption";
import { useGetSingleElement } from "../../../hooks/useGetSingleElement";
import { useGetSubElement } from "../../../hooks/useGetSubElement";
import Loader from "../Loader";
import { useRouter } from "next/router";
import ContentFormatter from "./ContentFormatter";

const DrawerStyles = styled.div`
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.9);
	position: fixed;
	display: ${(props: StyledComponentsTypes) =>
		props.isVisible ? "block" : "none"};
	transition: 1s;
	right: 0;
	top: 0;
	z-index: 1;
	overflow: hidden;
`;

const DrawerContent = styled.div`
	background: ${colors.light_grey};
	transition: 0.3s;
	width: 40%;
	height: 100vh;
	position: absolute;
	display: ${(props: StyledComponentsTypes) =>
		props.isVisible ? "block" : "none"};
	opacity: ${(props) => (props.isVisible ? "1" : "0")};
	right: 0;
	top: 0;
	z-index: 10;
	padding: 64px;
	padding-right: 82px;

	@media (max-width: 1500px) {
		width: 50%;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 24px;
	}
`;

const CloseIcon = styled.img`
	width: 42px;
	position: absolute;
	right: 32px;
	top: 32px;
	cursor: pointer;
`;

const Drawer: FC<DrawerTypes> = ({
	isVisible,
	setIsVisible,
	url,
	icon = "/icons/element.png",
}) => {
	const handleCloseDrawer = () => {
		setIsVisible(false);
	};

	const { element } = useGetSingleElement(url);
	const { subElement: lord } = useGetSubElement(element?.content?.currentLord);
	const { subElement: overLord } = useGetSubElement(element?.content?.overlord);

	const router = useRouter();

	const isUserAt = {
		books: router.pathname === "/books",
		characters: router.pathname === "/characters",
	};

	const { bookContent, characterContent, houseContent } = ContentFormatter({
		element,
		lord,
		overLord,
	});

	const contentToDisplay = isUserAt.books
		? bookContent
		: isUserAt.characters
		? characterContent
		: houseContent;

	return (
		<>
			<DrawerStyles isVisible={isVisible} onClick={handleCloseDrawer} />

			<DrawerContent isVisible={isVisible}>
				{element.isLoading || lord.isLoading || overLord.isLoading ? (
					<Loader color="black" />
				) : (
					<>
						<CloseIcon
							src="/icons/Close.png"
							alt="Close icon"
							onClick={handleCloseDrawer}
						/>

						<Flex justify="none" gap={24} mb={0} mt={32} items="top">
							<Image src={icon} width={46} height={49} alt="element icon" />

							<SubTitle
								mb={0}
								transform="uppercase"
								color={`${colors.black}`}
								weight={600}
							>
								{element?.content?.name || "Unknown"}
							</SubTitle>
						</Flex>

						<Section ml={70} mb={32}>
							<Text color={`${colors.middle_grey}`}>
								{element?.content?.region || "Unknown"}
							</Text>
						</Section>

						{contentToDisplay.map((ctx) => (
							<Section key={ctx.id} ml={70} mt={32}>
								<Text color={`${colors.black}`} mb={24}>
									{ctx.name}
								</Text>

								{ctx?.subContent?.map((detail: any) => (
									<Flex
										justify="none"
										gap={24}
										mb={8}
										key={detail.id}
										items="top"
									>
										<Caption width="30%" color={`${colors.middle_grey}`}>
											{detail.name}
										</Caption>

										<Caption width="100%" color={`${colors.black}`}>
											{detail.value || "Unknown"}
										</Caption>
									</Flex>
								))}
							</Section>
						))}
					</>
				)}
			</DrawerContent>
		</>
	);
};

export default Drawer;
