import styled from "styled-components";
import { colors } from "../../../themes/colors";
import { font_family } from "../../../themes/fonts";

export default styled.button`
	background-color: ${colors.primary};
	padding: 12px 18px;
	outline: none;
	border: none;
	border-radius: 4px;
	color: ${colors.white};
	display: flex;
	align-items: center;
	gap: 12px;
	font-family: ${font_family.lato};
	cursor: pointer;
	white-space: nowrap;
	text-decoration: none;

	@media (max-width: 768px) {
		padding: 9px;
		gap: 6px;
	}
`;
