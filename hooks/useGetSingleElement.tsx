/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
type StateTypes = {
	content: any;
	err: any;
	isLoading: boolean;
};

export const useGetSingleElement = (url: string | null) => {
	const [element, setElement] = useState<StateTypes>({
		content: [],
		isLoading: false,
		err: null,
	});

	const handleGetSingleHouse = async () => {
		setElement({ ...element, isLoading: true });
		try {
			const response = await axios.get(url || "");
			setElement({ ...element, content: response.data, isLoading: false });
		} catch (error) {
			setElement({ ...element, isLoading: false, err: error });
		}
	};

	useEffect(() => {
		url && handleGetSingleHouse();
	}, [url]);

	return { element };
};
