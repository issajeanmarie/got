import React, { useState } from "react";
import type { NextPage } from "next";
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
import { useGetContent } from "../hooks/useGetContent";
import Loader from "./components/Loader/Loader";

type CharacterTypes = {
	name: string;
	gender: string;
	url: string;
	culture: string;
	books: [];
};

const Home: NextPage = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [pageSize, setPageSize] = useState<number>(10);
	const [searchValue, setSearchValue] = useState<string>("");

	const { content } = useGetContent({
		pageSize,
		search: searchValue,
		endpoint: "/characters",
	});
	const [contentToDisplay, setContentToDisplay] = useState<string>("");

	return (
		<Layout>
			<Navbar setSearchValue={setSearchValue} searchValue={searchValue} />
			<Drawer
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				url={contentToDisplay}
				icon="/icons/character.png"
			/>

			<Content>
				{content.isLoading ? (
					<Loader />
				) : (
					<>
						<Heading1 mt={64}>Game of Thrones characters</Heading1>

						<Title mt={16} width="66%">
							Type to search, or scroll down...
						</Title>

						<Section mt={64}>
							<SubTitle mb={32} weight={600}>
								{content?.content?.length || 0} Characters
							</SubTitle>

							<Flex wrap="true" gap={24} items="top">
								{content?.content?.map(
									({ name, gender, url, culture, books }: CharacterTypes) => {
										return (
											<Card
												key={url}
												name={name}
												url={url}
												content={[
													{ key: 0, name: "Gender", value: gender },
													{ key: 1, name: "Culture", value: culture },
												]}
												numberedElement={{
													name: "Total written books",
													value: books.length,
												}}
												setIsVisible={setIsVisible}
												setContentToDisplay={setContentToDisplay}
												icon="/icons/character.png"
											/>
										);
									}
								)}
							</Flex>

							{content.content.length > 9 && (
								<button
									className="load_more_btn"
									onClick={() => setPageSize(pageSize * 2)}
								>
									Load more
								</button>
							)}
						</Section>
					</>
				)}
			</Content>
		</Layout>
	);
};
export default Home;
