import { FC } from "react";

import { Box } from "@mui/system";

import { useStyles } from "./styles/Header.styles";
import { HiAnnotation } from "react-icons/hi";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header: FC<{}> = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Link to='#'>
				<HiAnnotation fontSize={35} color='var(--light)' />
			</Link>
			<Box className={classes.linkContainer}>
				<Link to='#'>
					<Typography className={classes.link} variant='h2' component='h2'>
						Preview
					</Typography>
				</Link>
				<Link to='#'>
					<Typography className={classes.link} variant='h2' component='h2'>
						Product
					</Typography>
				</Link>
				<Link to='#'>
					<Typography className={classes.link} variant='h2' component='h2'>
						Prices
					</Typography>
				</Link>
				<Link to='#'>
					<Typography className={classes.link} variant='h2' component='h2'>
						About us
					</Typography>
				</Link>
			</Box>
		</Box>
	);
};

export { Header };
