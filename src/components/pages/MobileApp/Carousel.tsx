/* eslint-disable jsx-a11y/alt-text */
import { FC, useState } from "react";

import { Box, display } from "@mui/system";
import { IconButton } from "@mui/material";

import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

import { useStyles } from "./styles/Carousel.styles";

const Carousel: FC<{}> = () => {
	const classes = useStyles();

	const [shownIndex, setShownIndex] = useState(0);
	const [items, setItems] = useState([
		"assets/images/mobile_app/inapppreview_1.svg",
		"assets/images/mobile_app/inapppreview_2.svg",
		"assets/images/mobile_app/inapppreview_3.svg",
	]);

	const swapLeft = () => {
		if (shownIndex - 1 < 0 && items.length > 0) {
			setShownIndex(items.length - 1);
		} else {
			setShownIndex(Math.max(shownIndex - 1, 0));
		}
	};

	const displayLeft = () => {
		if (shownIndex - 1 < 0 && items.length > 0) {
			return items[items.length - 1];
		} else {
			return items[Math.max(shownIndex - 1, 0)];
		}
	};

	const swapRight = () => {
		if (shownIndex + 1 > items.length - 1) {
			setShownIndex(0);
		} else {
			setShownIndex(shownIndex + 1);
		}
	};

	const displayRight = () => {
		if (shownIndex + 1 > items.length - 1) {
			return items[0];
		} else {
			return items[shownIndex + 1];
		}
	};

	return (
		<Box className={classes.container}>
			<IconButton onClick={swapLeft} color='primary' aria-label='upload picture' component='span'>
				<HiArrowSmLeft fontSize={75} />
			</IconButton>
			{items.length > 1 && <img alt='preview' className={classes.backgroundItem} src={displayLeft()} />}
			<img alt='preview' className={classes.mainItem} src={items[shownIndex]} />
			{items.length > 2 && <img alt='preview' className={classes.backgroundItem} src={displayRight()} />}
			<IconButton onClick={swapRight} color='primary' aria-label='upload picture' component='span'>
				<HiArrowSmRight fontSize={75} />
			</IconButton>
		</Box>
	);
};

export { Carousel };
