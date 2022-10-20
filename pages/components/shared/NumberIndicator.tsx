import styled from "styled-components";
import { Flex } from "./Flex";
import { colors } from "../../../themes/colors";

export const NumberIndicator = styled(Flex)`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background: ${colors.black};
	color: ${colors.grey};
	font-size: 12px;
	font-weight: 600;
`;
