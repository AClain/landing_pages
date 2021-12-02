import { FC } from "react";

import { Box } from "@mui/system";

import { DescriptionBox } from "./DescriptionBox";

import { useStyles } from "./styles/Body.styles";
import { Typography } from "@material-ui/core";

const Body: FC<{}> = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Box>
				<Typography variant='body1'>All your notifications, in one place</Typography>
				<img alt='preview image' src='assets/images/mobile_app/preview.svg' />
			</Box>
			<DescriptionBox description='' imagePath='assets/images/mobile_app/notifications.svg' />
		</Box>
	);
};

export { Body };
