import styled from "styled-components";
import { StyledComponentsTypes } from "../../../libs/types";
import { colors } from "../../../themes/colors";

export default styled.h2`
	font-size: 24px;
	font-weight: 300;
	margin: auto;
	width: ${(props: StyledComponentsTypes) => (props.width ? props.width : "")};
	text-align: center;
	margin-top: ${(props) => (props.mt ? `${props.mt}px` : "")};
	margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "")};
	color: ${colors.grey};

	@media (max-width: 768px) {
		font-size: 18px;
		width: 100%;

		margin-top: ${(props) => (props.mt ? `${props.mt / 2}px` : "")};
		margin-bottom: ${(props) => (props.mb ? `${props.mb / 2}px` : "")};
	}
`;
