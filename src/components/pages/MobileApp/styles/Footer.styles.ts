import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	container: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		paddingBottom: "150px",
	},
	title: {
		margin: "50px 0px",
		fontFamily: "Roboto Thin",
	},
	btnContainer: {
		display: "flex",
	},
	btn: {
		margin: "0px 15px",
		fontSize: "24px",

		"&:hover": {
			background: "var(--dark)",
		},
	},
	btniOS: {
		background: "#B000B9",
		color: "var(--light)",
	},
	btnPlayStore: {
		background: "#34a853",
		color: "var(--light)",
	},
	btnWindows: {
		background: "#0078d7",
		color: "var(--light)",
	},
});

export { useStyles };
