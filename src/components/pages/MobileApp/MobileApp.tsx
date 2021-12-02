import { FC } from "react";

import { Box } from "@mui/system";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

const MobileApp: FC<{}> = () => {
	return (
		<Box>
			<Header />
			<Body />
			<Footer />
		</Box>
	);
};

export { MobileApp };
