import React from 'react';

export default function Home(props) {

	const element = props.allContries.map((singleContry) => {
		return (
			<h1>{singleContry.contry}</h1>
		);
	});


	return (
		<div className="HomePage container">
			<h1 className="">
				Home
			</h1>
			{element}
			<div className="columns is-desktop is-centered">
			</div>
		</div>
	);
}
