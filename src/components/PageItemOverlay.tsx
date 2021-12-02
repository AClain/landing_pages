import { FC } from "react";
import { Link } from "react-router-dom";

import { Box } from "@mui/system";
import { Button, Typography } from "@material-ui/core";

import { Page } from "types/Page";

import { useStyles } from "./PageItemOverlay.styles";

import { HiDocumentSearch } from "react-icons/hi";

interface PageItemOverlayProps {
	page: Page;
	show: boolean;
}

const PageItemOverlay: FC<PageItemOverlayProps> = ({ page, show }) => {
	const classes = useStyles();

	return (
		<Box className={`${classes.container} ${show ? classes.fadeIn : classes.fadeOut}`}>
			<Typography className={classes.pageName} variant='h1' component='h1'>
				{page.name}
			</Typography>
			<Typography className={classes.pageDescription} variant='caption' component='h3'>
				{page.description}
			</Typography>
			<Box className={classes.btnContainer}>
				<Link to={page.link}>
					<Button className={classes.seeBtn} variant='contained'>
						See landing page
					</Button>
				</Link>
				<a href={page.github} target='_blank' rel='noreferrer'>
					<Button className={classes.sourceBtn} startIcon={<HiDocumentSearch />} color='inherit' variant='contained'>
						View source code
					</Button>
				</a>
			</Box>
		</Box>
	);
};

export { PageItemOverlay };
