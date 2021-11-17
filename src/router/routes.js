import React from 'react';
import Welcome from '../pages/Welcome';
import Contact from '../pages/Contact';
import About from '../pages/About';

const routes = [
  {
    path: "/",
    key: "welcome",
    Component: Welcome
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
