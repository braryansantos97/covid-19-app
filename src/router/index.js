import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Show from '../pages/Show';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import routes from './routes';
import axios from 'axios';

const AppRouter = () => {

  //  componentDidMount(){
  //   const options = {
  //     method: 'GET',
  //     url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
  //     params: {country: 'Canada'},
  //     headers: {
  //       'x-rapidapi-key': '',
  //       'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
  //     }
  //   };
  //
  //   axios.request(options).then(function (response) {
  //   	console.log(response.data);
  //   }).catch(function (error) {
  //   	console.error(error);
  //   });
  // };


	return (
		<Router>
      <Navbar routes={routes}/>
			<Routes>
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
			</Routes>
		</Router>
	);
};

export default AppRouter;
