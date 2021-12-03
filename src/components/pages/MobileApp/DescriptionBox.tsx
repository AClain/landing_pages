/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { FC } from "react";

import { useStyles } from "./styles/DescriptionBox.styles";

interface DescriptionBoxProps {
	title: string;
	description: string;
	imagePath: string;
	bgColor?: string;
	color?: string;
	alignRight?: boolean;
	alignLeft?: boolean;
}

const DescriptionBox: FC<DescriptionBoxProps> = ({
	title,
	description,
	imagePath,
	bgColor,
	color,
	alignRight,
	alignLeft,
}) => {
	const classes = useStyles({ bgColor, color });

	return (
		<Box className={classes.container}>
			<Typography className={classes.title} variant='h2' component='h2'>
				{title}
			</Typography>
			{alignLeft && <img className={classes.image} src={imagePath} />}
			<Typography className={classes.description}>{description}</Typography>
			{alignRight && <img className={classes.image} src={imagePath} />}
		</Box>
	);
};

export { DescriptionBox };
