import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	container: {
		width: "100%",
		height: "50px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		boxShadow: "var(--small-box-shadow)",
		background: "var(--dark)",
		padding: "0px 15px",
	},
	linkContainer: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "70%",
	},
	link: {
		fontSize: "16px",
		color: "var(--light)",
	},
});

export { useStyles };
