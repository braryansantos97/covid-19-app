import React from 'react';
import Welcome from '../pages/Welcome';
import Contact from '../pages/Contact';
import About from '../pages/About';

const routes = [
  {
    Component: Welcome,
    key: "welcome",
    path: "/"
  },
  {
    Component: Contact,
    key: 'contact',
    path: '/contact'
  },
	{
    Component: About,
    key: 'about',
    path: '/about'
	},
];

export default routes;
