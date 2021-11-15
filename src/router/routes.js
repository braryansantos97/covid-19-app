import React from 'react';
import Welcome from '../pages/Welcome';
import Contact from '../pages/Welcome';
import About from '../pages/About';

// import { Route, Switch } from "react-router-dom";

const routes = [
  {
    path: "/",
    key: "welcome",
    component: Welcome
  },
  {
    path: '/contact',
    key: 'contact',
    Component: Contact,
  },
	{
    path: '/about',
    key: 'about',
    Component: About,
	},
,
];

export default routes;
