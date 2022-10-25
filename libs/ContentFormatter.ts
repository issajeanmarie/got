export const ContentFormatter = ({ element, lord, overLord }: any) => {
	const bookContent = [
		{
			id: 0,
			name: "Details",
			subContent: [
				{
					id: 0,
					name: "Authors",
					value: `${element?.content?.authors?.map(
						(author: string) => `${author ? `${author}, ` : ""}`
					)}`,
				},

				{
					id: 1,
					name: "Country",
					value: element?.content?.country,
				},

				{
					id: 2,
					name: "Characters",
					value: element?.content?.characters?.length,
				},

				{
					id: 3,
					name: "Released",
					value: element?.content?.released,
				},

				{
					id: 4,
					name: "Pages",
					value: element?.content?.numberOfPages,
				},
			],
		},
	];

	const characterContent = [
		{
			id: 0,
			name: "Details",
			subContent: [
				{
					id: 0,
					name: "Gender",
					value: element?.content?.gender,
				},
				{
					id: 1,
					name: "Culture",
					value: element?.content?.culture,
				},
				,
				{
					id: 2,
					name: "Aliases",
					value: element?.content?.aliases?.map(
						(alias: string) => `${alias ? `${alias}, ` : ""}`
					),
				},

				{
					id: 3,
					name: "Books",
					value: element?.content?.books?.length,
				},

				{
					id: 4,
					name: "TV Series",
					value: element?.content?.tvSeries?.length,
				},
				{
					id: 5,
					name: "Played by",
					value: element?.content?.playedBy?.map(
						(player: string) => `${player ? `${player}, ` : "Unknown"}`
					),
				},
			],
		},
	];

	const houseContent = [
		{
			id: 0,
			name: "Details",
			subContent: [
				{ id: 0, name: "Words", value: element?.content?.words },
				{ id: 1, name: "Coat of Arms", value: element?.content?.coatOfArms },
				{ id: 2, name: "Seats", value: element?.content?.seats },
			],
		},
		{
			id: 1,
			name: "Current lord",
			subContent: [
				{ id: 0, name: "Name", value: lord?.content?.name },
				{ id: 1, name: "Gender", value: lord?.content?.gender },
				{ id: 2, name: "Culture", value: lord?.content?.culture },
			],
		},

		{
			id: 2,
			name: "Over lord",
			subContent: [
				{ id: 0, name: "Name", value: overLord?.content?.name },
				{ id: 1, name: "Region", value: overLord?.content?.region },
				{ id: 2, name: "Founded", value: overLord?.content?.founded },
			],
		},
	];

	return { bookContent, characterContent, houseContent };
};
