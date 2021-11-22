import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Show from '../pages/Show';
import { BrowserRouter as Router, Route, Link, Routes, Switch } from 'react-router-dom';
import routes from './routes';
import axios from 'axios';

const AppRouter = () => {
	const [contry, setContry] = useState("");
	const [total, setTotal] = useState("");
	const [currentContry, setCurrentContry] = useState({});

	 useEffect(() => {
			(async () => {
			try {
				const response = await fetch("https://covid-19-data.p.rapidapi.com/totals", {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
						"x-rapidapi-key": "f038bc4bafmsh34635fa6d4ed154p1808c2jsn07972b149609"
					}
				});
				const data = await response.json();
				setTotal(data);
			} catch (e) {
				console.error(e);
			}
		} ) ();
	}, []);

// 	const getTodos = async () => {
// 	try {
// 		const response = await fetch(url);
// 		const data = await response.json();
// 		setPosts(data.reverse())
// 	}catch(e){
// 		console.error(e)
// 	}
// }


	// const getcontryData = () => {
	// 	var options = {
	// 	  method: 'GET',
	// 	  url: 'https://covid-19-data.p.rapidapi.com/country/code',
	// 	  params: {code: 'US', format: 'json'},
	// 	  headers: {
	// 	    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
	// 	    'x-rapidapi-key': ''
	// 	  }
	// 	};
	//
	// 	axios.request(options).then(function (response) {
	// 		setContry(response)
	// 		console.log(response.data);
	// 	}).catch(function (error) {
	// 		console.error(error);
	// 	});
	// }

	return (
		<Router>
      <Navbar routes={routes} />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						exact
						component={() => <Component page={key} />}
					></Route>
				))}
				<Route
					path={'/'}
					render={(routerProps) => <Home {...routerProps} total={total} />}
				></Route>
        <Route
          path={'/:id'}
          render={routerProps => <Show {...routerProps} />}
        ></Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
