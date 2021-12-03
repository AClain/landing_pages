import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "50px 0px",
	},
	mainItem: {
		transform: "scale(1.05)",
	},
	backgroundItem: {
		transform: "scale(0.85)",
	},
});

export { useStyles };
