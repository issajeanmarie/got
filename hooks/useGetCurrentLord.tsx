import axios from "axios";
import { useEffect, useState } from "react";
type StateTypes = {
	content: any;
	err: any;
	isLoading: boolean;
};

export const useGetCurrentLord = (url: string) => {
	const [lord, setLord] = useState<StateTypes>({
		content: [],
		isLoading: false,
		err: null,
	});

	const handleGetCurrentLord = async () => {
		setLord({ ...lord, isLoading: true });
		try {
			const response = await axios.get(url);
			setLord({ ...lord, content: response.data, isLoading: false });
		} catch (error) {
			setLord({ ...lord, isLoading: false, err: error });
		}
	};

	useEffect(() => {
		url && handleGetCurrentLord();
	}, [url]);

	return { lord };
};
