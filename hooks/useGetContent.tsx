/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
type StateTypes = {
	content: any;
	err: any;
	isLoading: boolean;
};

export const useGetContent = ({
	pageSize = 10,
	search = "",
	endpoint = "/houses",
}) => {
	const [content, setContent] = useState<StateTypes>({
		content: [],
		isLoading: false,
		err: null,
	});

	const handleGetContent = async () => {
		setContent({ ...content, isLoading: true });
		try {
			const response = await axios.get(
				`https://anapioficeandfire.com/api${endpoint}?page=0&pageSize=${
					pageSize || ""
				}&name=${search || ""}`
			);
			setContent({
				...content,
				content: [...response.data],
				isLoading: false,
			});
		} catch (error) {
			setContent({ ...content, isLoading: false, err: error });
		}
	};

	useEffect(() => {
		handleGetContent();
	}, [pageSize, search]);

	return { content, setContent };
};
