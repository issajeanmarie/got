import React, { useState } from "react";
import type { NextPage } from "next";
import Navbar from "./components/Navbar";
import Layout from "./components/shared/Layout";
import { Content } from "./components/shared/Content";
import { Heading1 } from "./components/shared/Text/Heading1";
import { Title } from "./components/shared/Text/Title";
import { SubTitle } from "./components/shared/Text/SubTitle";
import { Section } from "./components/shared/Section";
import Card from "./components/Card";
import { Flex } from "./components/shared/Flex";
import Drawer from "./components/Drawer/Drawer";

const Home: NextPage = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	return (
		<Layout>
			<Navbar />
			<Drawer isVisible={isVisible} setIsVisible={setIsVisible} />

			<Content>
				<Heading1 mt={64}>Game of Thrones houses on your finger-tips</Heading1>

				<Title mt={64} width="66%">
					You have Game of Thrones houses on your finger tips, type to search,
					or scroll down...
				</Title>

				<Section mt={64}>
					<SubTitle mb={32} weight={600}>
						30 Houses
					</SubTitle>

					<Flex wrap="true" gap={24}>
						<Card setIsVisible={setIsVisible} />
					</Flex>
				</Section>
			</Content>
		</Layout>
	);
};

export default Home;
