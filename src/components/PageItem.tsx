import { FC, useState } from "react";

import { Box } from "@mui/system";

import { PageItemOverlay } from "./PageItemOverlay";

import { useStyles } from "components/PageItem.styles";
import { Page } from "types/Page";

interface PageItemProps {
	page: Page;
}

const PageItem: FC<PageItemProps> = ({ page }) => {
	const classes = useStyles({ image: page.image });

	const [show, setShow] = useState(false);

	return (
		<Box
			className={classes.container}
			onMouseOver={() => {
				setShow(true);
			}}
			onMouseOut={() => {
				setShow(false);
			}}
		>
			<PageItemOverlay show={show} page={page} />
		</Box>
	);
};

export { PageItem };
