import React from 'react';

import './Background.scss';

const Background = ({image}) => {
	return (
		<div className="background">
			<img src={image} alt=""/>
		</div>
	);
}

export default Background;
