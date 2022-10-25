import React, { FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import Spin from "antd/lib/spin";
import Flex from "../shared/Flex";
import Text from "../shared/Text/Text";
import { LoaderTypes } from "../../libs/types";

const Loader: FC<LoaderTypes> = ({ color }) => {
	const SpinIcon = <LoadingOutlined spin style={{ color: color || "white" }} />;

	return (
		<Flex width="100%" height="100vh" gap={12} justify="center">
			<Spin indicator={SpinIcon} />
			<Text color={color || "white"}>Wait for a moment...</Text>
		</Flex>
	);
};

export default Loader;
