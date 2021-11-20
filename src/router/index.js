import React from "react";
import Navbar from '../components/Navbar';
import Show from '../pages/Show';
import { BrowserRouter as Router, Route, Link, Routes, Switch } from 'react-router-dom';
import routes from './routes';
import axios from 'axios';

const AppRouter = () => {

	const componentDidMount = () => {

		var options = {
		  method: 'GET',
		  url: 'https://covid-19-data.p.rapidapi.com/country/code',
		  params: {code: 'US', format: 'json'},
		  headers: {
		    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
		    'x-rapidapi-key': ''
		  }
		};

		axios.request(options).then(function (response) {
			console.log(response.data);
		}).catch(function (error) {
			console.error(error);
		});
	}

	return (
		<Router>
      <Navbar routes={routes}/>
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
          path={'/:id'}
          render={routerProps => <Show {...routerProps} />}
        ></Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
