import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "../../themes/colors";
import Flex from "../shared/Flex";
import SubTitle from "../shared/Text/SubTitle";
import Text from "../shared/Text/Text";
import Section from "../shared/Section";
import NumberIndicator from "../shared/NumberIndicator";
import SecondaryButton from "../shared/Buttons/SecondaryButton";
import { CardTypes } from "../../libs/types";

const CardStyles = styled.div`
	background: ${colors.card};
	border: 1px solid ${colors.card_border};
	padding: 24px;
	border-radius: 4px;
	flex: 1;
	flex-basis: 30%;
`;

const Card: FC<CardTypes> = ({
	content,
	setIsVisible,
	name,
	url,
	setContentToDisplay,
	numberedElement,
	icon,
}) => {
	return (
		<CardStyles>
			<Flex justify="none" gap={24} mb={32}>
				{icon && (
					<Image
						src={icon}
						width={29}
						height={29}
						alt="Element icon"
						style={{ objectFit: "cover" }}
					/>
				)}

				<SubTitle transform="uppercase" weight={600}>
					{name || "Unknown"}
				</SubTitle>
			</Flex>

			<Section mb={32}>
				{content.map((el: { key: number; name: string; value: string }) => (
					<Flex key={el.key} justify="none" gap={24} mb={12}>
						<Text weight={300} color="#C4C4C4" width="22%">
							{el.name}
						</Text>

						<Text>{el.value || "Unknown"}</Text>
					</Flex>
				))}
			</Section>

			<Flex>
				<Flex justify="none" width="100%" gap={12}>
					<NumberIndicator items="center" justify="center">
						{numberedElement.value}
					</NumberIndicator>

					<Text weight={300} color="#C4C4C4" width="20%" nowrap="true">
						{numberedElement.name}
					</Text>
				</Flex>

				<SecondaryButton
					onClick={() => {
						setContentToDisplay(url);
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
