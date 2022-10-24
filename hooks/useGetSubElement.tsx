/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
type StateTypes = {
	content: any;
	err: any;
	isLoading: boolean;
};

export const useGetSubElement = (url: string) => {
	const [subElement, setSubElement] = useState<StateTypes>({
		content: [],
		isLoading: false,
		err: null,
	});

	const handleGetSubElement = async () => {
		setSubElement({ ...subElement, isLoading: true });
		try {
			const response = await axios.get(url);
			setSubElement({
				...subElement,
				content: response.data,
				isLoading: false,
			});
		} catch (error) {
			setSubElement({ ...subElement, isLoading: false, err: error });
		}
	};

	useEffect(() => {
		url && handleGetSubElement();
	}, [url]);

	return { subElement };
};
