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
import { useGetSingleHouse } from "../../../hooks/useGetSingleHouse";
import { useGetCurrentLord } from "../../../hooks/useGetCurrentLord";
import { useGetOverLord } from "../../../hooks/useGetOverLord";
import Loader from "../Loader";

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

const Drawer: FC<DrawerTypes> = ({ isVisible, setIsVisible, url }) => {
	const handleCloseDrawer = () => {
		setIsVisible(false);
	};

	const { house } = useGetSingleHouse(url);
	const { lord } = useGetCurrentLord(house?.content?.currentLord);
	const { overLord } = useGetOverLord(house?.content?.overlord);

	const houseDetails = [
		{ id: 0, name: "Words", value: house?.content?.words },
		{ id: 1, name: "Coat of Arms", value: house?.content?.coatOfArms },
		{ id: 2, name: "Seats", value: house?.content?.seats },
	];

	const currentLordDetails = [
		{ id: 0, name: "Name", value: lord?.content?.name },
		{ id: 1, name: "Gender", value: lord?.content?.gender },
		{ id: 2, name: "Culture", value: lord?.content?.culture },
	];

	const overLordDetails = [
		{ id: 0, name: "Name", value: overLord?.content?.name },
		{ id: 1, name: "Region", value: overLord?.content?.region },
		{ id: 2, name: "Founded", value: overLord?.content?.founded },
	];

	return (
		<>
			<DrawerStyles
				isVisible={isVisible}
				onClick={handleCloseDrawer}
			></DrawerStyles>

			<DrawerContent isVisible={isVisible}>
				{house.isLoading || lord.isLoading || overLord.isLoading ? (
					<Loader color="black" />
				) : (
					<>
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
								{house?.content?.name || "Unknown"}
							</SubTitle>
						</Flex>
						<Section ml={70} mb={32}>
							<Text color={`${colors.middle_grey}`}>
								{house?.content?.region || "Unknown"}
							</Text>
						</Section>
						<Section ml={70}>
							<Text color={`${colors.black}`} mb={12}>
								Details
							</Text>

							{houseDetails?.map((detail) => (
								<Flex justify="none" gap={24} mb={8} key={detail.id}>
									<Caption width="30%" color={`${colors.middle_grey}`}>
										{detail.name}
									</Caption>

									<Caption width="100%" color={`${colors.black}`}>
										{detail.value || "Unknown"}
									</Caption>
								</Flex>
							))}
						</Section>
						<Section ml={70} mt={32}>
							<Text color={`${colors.black}`} mb={12}>
								Current lord
							</Text>

							{currentLordDetails?.map((detail) => (
								<Flex key={detail.id} justify="none" gap={24} mb={8}>
									<Caption width="30%" color={`${colors.middle_grey}`}>
										{detail.name}
									</Caption>

									<Caption width="100%" color={`${colors.black}`}>
										{detail.value || "Unknown"}
									</Caption>
								</Flex>
							))}
						</Section>
						<Section ml={70} mt={32}>
							<Text color={`${colors.black}`} mb={12}>
								Over lord
							</Text>

							{overLordDetails?.map((detail) => (
								<Flex key={detail.id} justify="none" gap={24} mb={8}>
									<Caption width="30%" color={`${colors.middle_grey}`}>
										{detail.name}
									</Caption>

									<Caption width="100%" color={`${colors.black}`}>
										{detail.value || "Unknown"}
									</Caption>
								</Flex>
							))}
						</Section>
					</>
				)}
			</DrawerContent>
		</>
	);
};

export default Drawer;
