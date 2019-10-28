import React, { Component, Fragment } from 'react';
import { Button } from 'gw-ui';

import ScrollTransitionIn from 'components/ScrollTransitionIn';

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
							<div className="col-8 align-center stagger-in-items">
								<h3 className="title">
									<span>Vera </span>
									<span>& </span>
									<span>Robin's </span>
									<span>Wedding </span>
								</h3>
								<hr />
								<h2 className="my-2">Saturday, October 19, 2019</h2>

								<Button
									className="my-2"
									label="Registry"
									href="https://www.zola.com/registry/veraandrobin"
									target="_blank"
								/>
								<div className="hide-at-lg">
									<Button
										className="my-2"
										label="Photos"
										href="https://debris.smugmug.com/Weddings/Vera-and-Robin-Wedding/"
									/>
								</div>
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

export default Home;
