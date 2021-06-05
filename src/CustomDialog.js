import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	flagImage: {
		width: 200,
		height: 100,
		marginTop: 20,
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, country, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			<img src={country.flag} className={classes.flagImage}></img>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		width: theme.spacing(70),
		
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

const CustomDialog = (props) => {
	const { country, open, onClose } = props;

	return (
		<div>
			<Dialog
				onClose={onClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				{country && (
					<div>
						<DialogTitle
							id="customized-dialog-title"
							onClose={onClose}
							country={country}
						>
							{country.name}
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								{`Capital: ${country.capital}`}
							</Typography>
							<Typography gutterBottom>
								{`Population: ${country.population}`}
							</Typography>
							<Typography gutterBottom>
								{`Region: ${country.region}`}
							</Typography>
						</DialogContent>
						<DialogActions>
							<Button autoFocus onClick={onClose} color="primary">
								Okay
							</Button>
						</DialogActions>
					</div>
				)}
			</Dialog>
		</div>
	);
};

export default CustomDialog;
