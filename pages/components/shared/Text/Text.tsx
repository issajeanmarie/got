import styled from "styled-components";
import { colors } from "../../../../themes/colors";
import { StyledComponentsTypes } from "../../../../libs/types";

export default styled.p`
	font-size: 16px;
	font-weight: ${(props: StyledComponentsTypes) => props.weight || ""};
	color: ${(props) => props.color || ""};
	width: ${(props) => props.width || ""};
	white-space: ${(props) => (props.nowrap ? "nowrap" : "")};
	margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "")};

	@media (max-width: 768px) {
		font-size: 12px;
		width: 100%;
	}
`;
