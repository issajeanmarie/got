import styled from "styled-components";
import { font_family } from "../../../../themes/fonts";
import { StyledComponentsTypes } from "../../../libs/types";

export const Heading1 = styled.h1`
	font-size: 64px;
	font-family: ${(props: StyledComponentsTypes) =>
		props.family === "normal" ? font_family.lato : font_family.RussoOne};
	font-weight: 300;
	margin: auto;
	width: ${(props) => (props.width ? props.width : "")};
	text-align: center;
	margin-top: ${(props) => (props.mt ? `${props.mt}px` : "")};
	margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "")};

	@media (max-width: 768px) {
		font-size: 32px;
		width: 100%;
	}
`;
