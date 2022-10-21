import styled from "styled-components";
import { StyledComponentsTypes } from "../../../../libs/types";

export default styled.p`
	font-size: 22px;
	margin-top: ${(props: StyledComponentsTypes) =>
		props.mt ? `${props.mt}px` : ""};
	margin-bottom: ${(props) => (props.mb ? `${props.mb}px !important` : "")};
	text-transform: ${(props) => props.transform || ""};
	font-weight: ${(props) => props.weight || ""};
	color: ${(props) => props.color || ""};

	@media (max-width: 768px) {
		font-size: 18px;
		width: 100%;
	}
`;
