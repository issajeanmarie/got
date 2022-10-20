/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
type StateTypes = {
	content: any;
	err: any;
	isLoading: boolean;
};

export const useGetSingleHouse = (url: string) => {
	const [house, setHouse] = useState<StateTypes>({
		content: [],
		isLoading: false,
		err: null,
	});

	const handleGetSingleHouse = async () => {
		setHouse({ ...house, isLoading: true });
		try {
			const response = await axios.get(url);
			setHouse({ ...house, content: response.data, isLoading: false });
		} catch (error) {
			setHouse({ ...house, isLoading: false, err: error });
		}
	};

	useEffect(() => {
		url && handleGetSingleHouse();
	}, [url]);

	return { house };
};
