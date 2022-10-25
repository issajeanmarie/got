import styled from "styled-components";
import { StyledComponentsTypes } from "../../libs/types";

export default styled.section`
	margin-top: ${(props: StyledComponentsTypes) =>
		props.mt ? `${props.mt}px` : ""};
	margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "")};
	margin-left: ${(props) => (props.ml ? `${props.ml}px` : "")};

	@media (max-width: 768px) {
		margin-left: ${(props) => (props.sm_ml ? `${props.sm_ml}px` : "")};
	}
`;
