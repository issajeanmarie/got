import Image from "next/image";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../themes/colors";
import { DrawerTypes, StyledComponentsTypes } from "../../libs/types";
import { Flex } from "../shared/Flex";
import { Section } from "../shared/Section";
import { SubTitle } from "../shared/Text/SubTitle";
import { Text } from "../shared/Text/Text";
import { Caption } from "../shared/Text/Caption";

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

const Drawer: FC<DrawerTypes> = ({ isVisible, setIsVisible }) => {
	const handleCloseDrawer = () => {
		setIsVisible(false);
	};
	return (
		<>
			<DrawerStyles
				isVisible={isVisible}
				onClick={handleCloseDrawer}
			></DrawerStyles>

			<DrawerContent isVisible={isVisible}>
				<CloseIcon
					src="/icons/Close.png"
					alt="Close icon"
					onClick={handleCloseDrawer}
				/>

				<Flex justify="none" gap={24} mb={12} mt={32}>
					<Image
						src="/icons/house.png"
						width={46}
						height={49}
						alt="House icon"
					/>

					<SubTitle
						mb={0}
						transform="uppercase"
						color={`${colors.black}`}
						weight={600}
					>
						This is house of Tamarinds This is house of Tamarinds
					</SubTitle>
				</Flex>

				<Section ml={52} mb={32}>
					<Text color={`${colors.middle_grey}`}>Kigali - Rwanda</Text>
				</Section>

				<Section ml={52}>
					<Text color={`${colors.black}`} mb={12}>
						Details
					</Text>

					<Flex justify="none" gap={24} mb={8}>
						<Caption width="30%" color={`${colors.middle_grey}`}>
							Region
						</Caption>

						<Caption color={`${colors.black}`}>The Vale</Caption>
					</Flex>

					<Flex justify="none" gap={24} mb={8}>
						<Caption width="30%" color={`${colors.middle_grey}`}>
							Region
						</Caption>

						<Caption color={`${colors.black}`}>The Vale</Caption>
					</Flex>

					<Flex justify="none" gap={24} mb={8}>
						<Caption width="30%" color={`${colors.middle_grey}`}>
							Region
						</Caption>

						<Caption color={`${colors.black}`}>The Vale</Caption>
					</Flex>
				</Section>
			</DrawerContent>
		</>
	);
};

export default Drawer;
