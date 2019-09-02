import React, { Component, Fragment } from 'react';
import { Button } from 'gw-ui';

import Background from 'components/Background';
import Reef3 from 'assets/images/reef-3.jpg';

import './home.scss';

class Home extends Component {

	state = {
		loading : false
	}

	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Fragment>
				<div className="page">
					<div className="container">
					<section>
						<div className="grid-flex center">
							<div className="col-8 align-center">
								<h3 className="title">
									<span>Vera </span>
									<span>& </span>
									<span>Robin's </span>
									<span>Wedding </span>
								</h3>
								<hr />
								<h2 className="my-2">Saturday, October 10, 2019</h2>
								<p className="my-2">
									1070 Mission Canyon Road
									<br />
									Santa Barbara, California 93105
								</p>

								<p className="my-2">
									Ceremony will begin at 2:00pm
									<br />
									Drinks, dinner and dancing after.
								</p>

								<p className="my-2">
									Garden festive. Kids welcome.
								</p>

								<Button
									label="Map"
									href="https://goo.gl/maps/ZqAv4qsQrdfHsoud7"
									target="_blank"
								/>
							</div>
						</div>
					</section>
					</div>
				</div>
				<Background image={Reef3} />
			</Fragment>
		);
	}
}

Home.defaultProps = {
	lang: 'en-US'
}

export default Home;

