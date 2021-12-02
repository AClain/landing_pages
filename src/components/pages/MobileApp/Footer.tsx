import { FC } from "react";

import { Box } from "@mui/system";

import { useStyles } from "./styles/Footer.styles";

const Footer: FC<{}> = () => {
	const classes = useStyles();

	return <Box className={classes.container}>Footer</Box>;
};

export { Footer };
