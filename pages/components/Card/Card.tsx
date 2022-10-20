import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "../../../themes/colors";
import { Flex } from "../shared/Flex";
import { SubTitle } from "../shared/Text/SubTitle";
import { Caption } from "../shared/Text/Caption";
import { Text } from "../shared/Text/Text";
import { Section } from "../shared/Section";
import { NumberIndicator } from "../shared/NumberIndicator";
import { SecondaryButton } from "../shared/Buttons/SecondaryButton";
import { CardTypes } from "../../libs/types";

const CardStyles = styled.div`
	background: ${colors.card};
	border: 1px solid ${colors.card_border};
	padding: 24px;
	border-radius: 4px;
	margin-bottom: 24px;
	flex: 1;
	flex-basis: 30%;
`;

const Card: FC<CardTypes> = ({ setIsVisible }) => {
	return (
		<CardStyles>
			<Flex justify="none" gap={24} mb={32}>
				<Image src="/icons/house.png" width={26} height={29} alt="House icon" />

				<SubTitle transform="uppercase" weight={600}>
					This is house of Tamarinds
				</SubTitle>
			</Flex>

			<Section mb={32}>
				<Flex justify="none" gap={24} mb={12}>
					<Text weight={300} color="#C4C4C4" width="20%">
						Region
					</Text>

					<Text>The Vale</Text>
				</Flex>

				<Flex justify="none" gap={24} mb={12}>
					<Text weight={300} color="#C4C4C4" width="20%">
						Lord
					</Text>

					<Text>Issa Jean Marie</Text>
				</Flex>

				<Flex justify="none" gap={24} mb={12}>
					<Text weight={300} color="#C4C4C4" width="20%">
						Over lord
					</Text>

					<Text>The Vale</Text>
				</Flex>
			</Section>

			<Flex>
				<Flex justify="none" width="100%" gap={12}>
					<NumberIndicator items="center" justify="center">
						30
					</NumberIndicator>

					<Text weight={300} color="#C4C4C4" width="20%" nowrap="true">
						Swon members
					</Text>
				</Flex>

				<SecondaryButton onClick={() => setIsVisible(true)}>
					View details
				</SecondaryButton>
			</Flex>
		</CardStyles>
	);
};

export default Card;
