import styled from "styled-components";
import { StyledComponentsTypes } from "../../../libs/types";

export default styled.a`
	font-size: 14px;
	color: ${(props: StyledComponentsTypes) => props.color || ""};
	font-weight: ${(props) => props.weight || ""};
	width: ${(props) => props.width || ""};
`;
