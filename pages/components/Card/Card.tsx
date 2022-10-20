import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "../../../themes/colors";
import Flex from "../shared/Flex";
import SubTitle from "../shared/Text/SubTitle";
import Caption from "../shared/Text/Caption";
import Text from "../shared/Text/Text";
import Section from "../shared/Section";
import NumberIndicator from "../shared/NumberIndicator";
import SecondaryButton from "../shared/Buttons/SecondaryButton";
import { CardTypes } from "../../../libs/types";

const CardStyles = styled.div`
	background: ${colors.card};
	border: 1px solid ${colors.card_border};
	padding: 24px;
	border-radius: 4px;
	margin-bottom: 24px;
	flex: 1;
	flex-basis: 30%;
`;

const Card: FC<CardTypes> = ({
	setIsVisible,
	name,
	coatOfArms,
	region,
	words,
	swornMembers,
	url,
	setHouseToDisplay,
}) => {
	return (
		<CardStyles>
			<Flex justify="none" gap={24} mb={32}>
				<Image src="/icons/house.png" width={26} height={29} alt="House icon" />

				<SubTitle transform="uppercase" weight={600}>
					{name || "Unknown"}
				</SubTitle>
			</Flex>

			<Section mb={32}>
				<Flex justify="none" gap={24} mb={12}>
					<Text weight={300} color="#C4C4C4" width="22%">
						Region:
					</Text>

					<Text>{region || "Unknown"}</Text>
				</Flex>

				<Flex justify="none" gap={24} mb={12}>
					<Text weight={300} color="#C4C4C4" width="22%">
						Words:
					</Text>

					<Text>{words || "Unknown"}</Text>
				</Flex>

				<Flex justify="none" gap={24} mb={12}>
					<Text weight={300} color="#C4C4C4" width="22%">
						CoatOfArms:
					</Text>

					<Text>{coatOfArms || "Unknown"}</Text>
				</Flex>
			</Section>

			<Flex>
				<Flex justify="none" width="100%" gap={12}>
					<NumberIndicator items="center" justify="center">
						{swornMembers}
					</NumberIndicator>

					<Text weight={300} color="#C4C4C4" width="20%" nowrap="true">
						Sworn members
					</Text>
				</Flex>

				<SecondaryButton
					onClick={() => {
						setHouseToDisplay(url);
						setIsVisible(true);
					}}
				>
					View details
				</SecondaryButton>
			</Flex>
		</CardStyles>
	);
};

export default Card;
