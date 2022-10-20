import React, { FC } from "react";
import styled from "styled-components";
import { LayoutTypes } from "../../../libs/types";

const LayoutContainer = styled.div`
	color: white;
	height: 100vh;
	background-size: 100%;
	background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
		url(/images/hero-img.jpg);
	padding: 2rem 12rem;
	overflow-y: auto;

	@media (max-width: 1450px) {
		padding: 2rem 6rem;
	}

	@media (max-width: 768px) {
		padding: 2rem;
	}

	@media (max-width: 500px) {
		padding: 1rem 1rem;
	}
`;

const Layout: FC<LayoutTypes> = ({ children }) => {
	return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
