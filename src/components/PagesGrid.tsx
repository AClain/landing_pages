import { FC } from "react";

import { Box } from "@mui/system";

import { useStyles } from "components/PagesGrid.styles";
import { Page } from "types/Page";
import { PageItem } from "./PageItem";

const pages: Page[] = [
	{
		name: "Mobile app launch",
		description: "Placeholder description that describes the product",
		image: "assets/images/placeholder.png",
		link: "/mobile-app",
		github: "https://github.com",
	},
	{
		name: "Mobile app launch",
		description: "Placeholder description that describes the product",
		image: "assets/images/placeholder.png",
		link: "/mobile-app",
		github: "https://github.com",
	},
	{
		name: "Mobile app launch",
		description: "Placeholder description that describes the product",
		image: "assets/images/placeholder.png",
		link: "/mobile-app",
		github: "https://github.com",
	},
	{
		name: "Mobile app launch",
		description: "Placeholder description that describes the product",
		image: "assets/images/placeholder.png",
		link: "/mobile-app",
		github: "https://github.com",
	},
	{
		name: "Mobile app launch",
		description: "Placeholder description that describes the product",
		image: "assets/images/placeholder.png",
		link: "/mobile-app",
		github: "https://github.com",
	},
];

const PagesGrid: FC<{}> = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			{pages.map((p, i) => (
				<PageItem page={p} key={i} />
			))}
		</Box>
	);
};

export { PagesGrid };
