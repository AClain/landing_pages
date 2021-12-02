import { makeStyles } from "@material-ui/core";

interface PageItemStyleProps {
	image: string;
}

const useStyles = makeStyles({
	container: {
		position: "relative",
		backgroundImage: (props: PageItemStyleProps) => `url(${props.image})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		width: "450px",
		height: "350px",
		borderRadius: "5px",
		overflow: "hidden",
		boxShadow: "var(--small-box-shadow)",
		transition: "all 0.2s ease-in",
		margin: "10px 15px",

		"&:hover": {
			cursor: "pointer",
			boxShadow: "var(--medium-box-shadow)",
		},

		"&:hover > div": {
			display: "flex",
		},
	},
});

export { useStyles };
