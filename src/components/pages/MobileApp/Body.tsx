/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from "react";

import { Box } from "@mui/system";

import { DescriptionBox } from "./DescriptionBox";

import { useStyles } from "./styles/Body.styles";
import { Typography } from "@material-ui/core";

const Body: FC<{}> = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Box className={classes.headPreview}>
				<Typography variant='body1' className={classes.headPreviewTitle}>
					Your notifications, <br /> in <span className={classes.headPreviewHighlight}>one place</span>
				</Typography>
				<img
					className={classes.headPreviewImage}
					alt='preview image'
					src='assets/images/mobile_app/notifications.svg'
				/>
			</Box>
			<DescriptionBox
				title='Placeholder title'
				bgColor='var(--dark)'
				color='var(--light)'
				alignLeft
				description='Sint cupidatat irure sint et in mollit. Cillum deserunt minim cillum mollit cillum dolor dolore esse labore irure ea id anim. Deserunt duis incididunt eiusmod commodo eiusmod pariatur non do do eu sint. Laboris adipisicing amet id qui velit ex excepteur dolor aliqua. Sit adipisicing pariatur qui minim pariatur. Incididunt in id fugiat excepteur pariatur anim occaecat eiusmod.'
				imagePath='assets/images/mobile_app/preview.svg'
			/>
			<DescriptionBox
				title='Placeholder title'
				bgColor='var(--light)'
				color='var(--dark)'
				alignRight
				description='Sint cupidatat irure sint et in mollit. Cillum deserunt minim cillum mollit cillum dolor dolore esse labore irure ea id anim. Deserunt duis incididunt eiusmod commodo eiusmod pariatur non do do eu sint. Laboris adipisicing amet id qui velit ex excepteur dolor aliqua. Sit adipisicing pariatur qui minim pariatur. Incididunt in id fugiat excepteur pariatur anim occaecat eiusmod.'
				imagePath='assets/images/mobile_app/customization.svg'
			/>
		</Box>
	);
};

export { Body };
