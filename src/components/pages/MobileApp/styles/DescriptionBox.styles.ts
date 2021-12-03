import { makeStyles } from "@material-ui/core";

interface DescriptionBoxStyleProps {
	bgColor?: string;
	color?: string;
}

const useStyles = makeStyles({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		background: (props: DescriptionBoxStyleProps) => props.bgColor ?? "transparent",
	},
	title: {
		width: "100%",
		textAlign: "center",
		fontFamily: "Roboto Bold",
		color: (props: DescriptionBoxStyleProps) => props.color ?? "inherit",
		margin: "25px 0px",
	},
	description: {
		textAlign: "center",
		width: "50%",
		fontSize: "24px",
		lineHeight: 1.3,
		color: (props: DescriptionBoxStyleProps) => props.color ?? "inherit",
	},
	image: {
		width: "50%",
	},
});

export { useStyles };
