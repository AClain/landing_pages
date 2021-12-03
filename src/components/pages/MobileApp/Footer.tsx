import { FC } from "react";

import { Box } from "@mui/system";

import { useStyles } from "./styles/Footer.styles";
import { Button, Typography } from "@material-ui/core";

import { FaWindows, FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { Carousel } from "./Carousel";

const Footer: FC<{}> = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Typography className={classes.title} variant='h2' component='h2'>
				Download the app
			</Typography>
			<Box className={classes.btnContainer}>
				<Button
					className={`${classes.btn} ${classes.btniOS}`}
					variant='contained'
					startIcon={<FaAppStoreIos fontSize={50} />}
				>
					iOS
				</Button>
				<Button className={`${classes.btn} ${classes.btnPlayStore}`} variant='contained' startIcon={<FaGooglePlay />}>
					Android
				</Button>
				<Button className={`${classes.btn} ${classes.btnWindows}`} variant='contained' startIcon={<FaWindows />}>
					Get in on desktop
				</Button>
			</Box>

			<Carousel />
		</Box>
	);
};

export { Footer };
