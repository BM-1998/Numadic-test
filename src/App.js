import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import "./App.css";
import { Button } from "@material-ui/core";


import CustomDialog from "./CustomDialog";

const countriesURL = "https://restcountries.eu/rest/v2/all";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		backgroundColor: '#d9d9d9',
	},
	tr: {
		color: ' #000000',
		fontFamily: 'Cooper Black',
	},
	th: {
		backgroundColor: '#862d86',
		
	},
	tc: {
		color: 'white',
		fontFamily: 'Cooper Black',
	},

});

function App() {
	const [countriesData, setCountriesData] = useState([]);
	const [open, setOpen] = useState(false);
	const [country, setCountry] = useState();
	const classes = useStyles();

	const getCountriesWithAxios = async () => {
		const response = await axios.get(countriesURL);
		setCountriesData(response.data);
		// setCountriesData(response.data);
	};

	useEffect(() => {
		getCountriesWithAxios();
	}, []);

	const detailsButtonClicked = (country) => {
		setCountry(country);
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<CustomDialog country={country} open={open} onClose={onClose} />
			<Grid container>
				<Grid item xs={12}>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="simple table"
						>
							<TableHead className={classes.th}>
								<TableRow>
									<TableCell className={classes.tc}>
										<strong>Details</strong>
									</TableCell>
									<TableCell className={classes.tc}>
										<strong>Name</strong>
									</TableCell>
									<TableCell align="right" className={classes.tc}>
										<strong>Flag</strong>
									</TableCell>
									<TableCell align="right" className={classes.tc}>
										<strong>Capital</strong>
									</TableCell>
									<TableCell align="right" className={classes.tc}>
										<strong>Population</strong>
									</TableCell>
									<TableCell align="right" className={classes.tc}>
										<strong>Region</strong>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{countriesData.map((country, index) => (
									<TableRow key={index}>
										<TableCell align="center">
											<Button
												variant="contained"
												color="primary"
												onClick={() => {
													detailsButtonClicked(
														country
													);
												}}
											>
												Details
											</Button>
										</TableCell>
										<TableCell className={classes.tr} component="th" scope="row">
											{country.name}
										</TableCell>
										<TableCell align="right">
											<img
												src={country.flag}
												alt=""
												width="32px"
											/>
										</TableCell>
										<TableCell align="right" className={classes.tr}>
											{country.capital}
										</TableCell>
										<TableCell align="right" className={classes.tr}>
											{country.population}
										</TableCell>
										<TableCell align="right" className={classes.tr}>
											{country.region}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
