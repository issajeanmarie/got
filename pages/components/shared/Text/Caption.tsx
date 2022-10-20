import styled from "styled-components";
import { StyledComponentsTypes } from "../../../libs/types";

export const Caption = styled.p`
	font-size: 14px;
	color: ${(props: StyledComponentsTypes) => props.color || ""};
	font-weight: ${(props) => props.weight || ""};
	width: ${(props) => props.width || ""};
`;
