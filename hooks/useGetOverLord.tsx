/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
type StateTypes = {
	content: any;
	err: any;
	isLoading: boolean;
};

export const useGetOverLord = (url: string) => {
	const [overLord, setOverLord] = useState<StateTypes>({
		content: [],
		isLoading: false,
		err: null,
	});

	const handleGetCurrentLord = async () => {
		setOverLord({ ...overLord, isLoading: true });
		try {
			const response = await axios.get(url);
			setOverLord({ ...overLord, content: response.data, isLoading: false });
		} catch (error) {
			setOverLord({ ...overLord, isLoading: false, err: error });
		}
	};

	useEffect(() => {
		url && handleGetCurrentLord();
	}, [url]);

	return { overLord };
};
