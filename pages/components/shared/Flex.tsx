import styled from "styled-components";
import { StyledComponentsTypes } from "../../../libs/types";

export default styled.div`
	display: flex;
	align-items: ${(props: StyledComponentsTypes) => props.items || "center"};
	justify-content: ${(props) => props.justify || "space-between"};
	width: ${(props) => props.width || "100%"};
	height: ${(props) => props.height || ""};
	gap: ${(props) => (props.gap ? `${props.gap}px` : "")};
	margin-top: ${(props) => (props.mt ? `${props.mt}px` : "")};
	margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "")};
	flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;
