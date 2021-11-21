import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Covid-19</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="/home">Home</a>
				</li>
				{props.routes.map(({ key, path }) => (
					<li key={key} className="nav-item">
						<Link className="nav-link active" to={path}>
							{key}
						</Link>
					</li>
				))}
        </ul>
      </div>
    </div>
  </nav>
		</div>
	);
};

export default NavBar;
