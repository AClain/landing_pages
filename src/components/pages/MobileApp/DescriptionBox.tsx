import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { FC } from "react";

interface DescriptionBoxProps {
	description: string;
	imagePath: string;
}

const DescriptionBox: FC<DescriptionBoxProps> = ({ description, imagePath }) => {
	return (
		<Box>
			<Typography>{description}</Typography>
			<img src={imagePath} />
		</Box>
	);
};

export { DescriptionBox };
