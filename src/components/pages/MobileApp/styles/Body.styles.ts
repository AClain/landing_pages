import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	container: {},
	headPreview: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	headPreviewTitle: {
		fontSize: "56px",
		fontFamily: "Roboto Bold",
		width: "max-content",
	},
	headPreviewHighlight: {
		position: "relative",

		"&::after": {
			content: "''",
			display: "block",
			position: "absolute",
			bottom: 5,
			left: 15,
			width: "100%",
			height: "40%",
			background: "#98BAE7",
			zIndex: -1,
			borderBottomRightRadius: "5px",
			borderTopLeftRadius: "5px",
			transition: "all 0.2s ease-in",
		},

		"&:hover": {
			cursor: "pointer",
		},

		"&:hover::after": {
			bottom: 0,
			left: 0,
			height: "100%",
		},
	},
	headPreviewImage: {
		width: "50%",
	},
});

export { useStyles };
