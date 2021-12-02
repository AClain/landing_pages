import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	container: {
		position: "absolute",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		background: "rgba(0,0,0,0.7)",
		color: "var(--light)",
		opacity: 0,
		transform: "translateY(-100%)",
		padding: "15px",
	},
	fadeIn: {
		animation: "$fadeInTop .5s both",
	},
	fadeOut: {
		animation: "$fadeOutTop .5s",
	},
	pageName: {
		fontSize: "36px",
		width: "100%",
		textAlign: "center",
		fontFamily: "Roboto Bold",
	},
	pageDescription: {
		padding: "10px",
		fontSize: "14px",
		fontFamily: "Roboto Light",
	},
	btnContainer: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		color: "var(--dark)",
	},
	seeBtn: {
		background: "#90caf9",

		"&:hover": {
			background: "#42a5f5",
		},
	},
	sourceBtn: {
		background: "#81c784",

		"&:hover": {
			background: "#388e3c",
		},
	},

	"@keyframes fadeInTop": {
		from: {
			opacity: 0,
			transform: "translateY(-100%)",
		},
		to: {
			opacity: 1,
			transform: "translateY(0%)",
		},
	},
	"@keyframes fadeOutTop": {
		from: {
			opacity: 1,
			transform: "translateY(0%)",
		},
		to: {
			opacity: 0,
			transform: "translateY(-100%)",
		},
	},
});

export { useStyles };
