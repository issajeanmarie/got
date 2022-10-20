import React, { useState } from "react";
import type { NextPage } from "next";
import { LoadingOutlined } from "@ant-design/icons";
import Spin from "antd/lib/spin";
import Navbar from "./components/Navbar";
import Layout from "./components/shared/Layout";
import Content from "./components/shared/Content";
import Heading1 from "./components/shared/Text/Heading1";
import Title from "./components/shared/Text/Title";
import SubTitle from "./components/shared/Text/SubTitle";
import Section from "./components/shared/Section";
import Card from "./components/Card";
import Flex from "./components/shared/Flex";
import Drawer from "./components/Drawer/Drawer";
import { useGetHouses } from "../hooks/useGetHouses";
import Text from "./components/shared/Text/Text";

const SpinIcon = <LoadingOutlined spin style={{ color: "white" }} />;

type HouseTypes = {
	name: string;
	region: string;
	words: string;
	coatOfArms: string;
	swornMembers: [];
	url: string;
};

const Home: NextPage = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const { houses } = useGetHouses();
	const [houseToDisplay, setHouseToDisplay] = useState<string>("");

	return (
		<Layout>
			<Navbar />
			<Drawer
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				url={houseToDisplay}
			/>

			<Content>
				{houses.isLoading ? (
					<Flex width="100%" height="100vh" gap={12} justify="center">
						<Spin indicator={SpinIcon} />
						<Text color="white">Wait a few moment...</Text>
					</Flex>
				) : (
					<>
						<Heading1 mt={64}>
							Game of Thrones houses on your finger-tips
						</Heading1>

						<Title mt={64} width="66%">
							You have Game of Thrones houses on your finger tips, type to
							search, or scroll down...
						</Title>

						<Section mt={64}>
							<SubTitle mb={32} weight={600}>
								{houses?.content?.length || 0} Houses
							</SubTitle>

							<Flex wrap="true" gap={24} items="top">
								{houses?.content?.map(
									({
										name,
										region,
										words,
										coatOfArms,
										swornMembers,
										url,
									}: HouseTypes) => {
										return (
											<Card
												key={url}
												url={url}
												name={name}
												region={region}
												words={words}
												swornMembers={swornMembers?.length}
												coatOfArms={coatOfArms}
												setIsVisible={setIsVisible}
												setHouseToDisplay={setHouseToDisplay}
											/>
										);
									}
								)}
							</Flex>
						</Section>
					</>
				)}
			</Content>
		</Layout>
	);
};
export default Home;
