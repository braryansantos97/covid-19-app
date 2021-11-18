import React from "react";
import Navbar from '../components/Navbar';
import Show from '../pages/Show';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import routes from './routes';
import axios from 'axios';

const AppRouter = () => {

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
