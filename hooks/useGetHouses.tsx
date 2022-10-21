/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
type StateTypes = {
	content: any;
	err: any;
	isLoading: boolean;
};

export const useGetHouses = ({ pageSize = 50, search = "" }) => {
	const [houses, setHouses] = useState<StateTypes>({
		content: [],
		isLoading: false,
		err: null,
	});

	const handleGetHouses = async () => {
		setHouses({ ...houses, isLoading: true });
		try {
			const response = await axios.get(
				`https://anapioficeandfire.com/api/houses?page=0&pageSize=${pageSize}&name=${
					search || ""
				}`
			);
			setHouses({
				...houses,
				content: [...response.data],
				isLoading: false,
			});
		} catch (error) {
			setHouses({ ...houses, isLoading: false, err: error });
		}
	};

	useEffect(() => {
		handleGetHouses();
	}, [pageSize, search]);

	return { houses, setHouses };
};