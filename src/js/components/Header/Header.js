import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'gw-ui';

import './Header.scss';

class Header extends Component {

	state = {
		scrolled : false,
	}

	getClassName = () => {
		var className = 'header';
		if (this.props.className) {
			className += ' ' + this.props.className
		}
		if (this.state.scrolled) {
			className += ' scrolled'
		}
		return className
	}

	componentDidMount () {
		this.handleScroll();
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if( scrollTop > 10 ) {
			if (!this.state.scrolled) {
				this.setState({ scrolled: true });
			}
		} else {
			if (this.state.scrolled) {
				this.setState({ scrolled: false });
			}
		}
	}

	goToTop = () => {
		goToAnchor('top', false)
	}

	render () {
		const navItems = [
			// {
				// path: '/',
				// title: 'The Wedding'
		// 	},
			{
				path: '/travel',
				title: 'Travel & Accommodations'
			}
		];

		return (
			<div className={this.getClassName()}>
				<div className="inner-header">
					<div className="container">
						<div className="grid-flex middle no-break gutter-tight">
							<div className="col grow">
								<a
								className="logo-link"
								href="/"
								>
									Vera & Robin
								</a>
							</div>
							<div className="col no-grow">
								{navItems ? (
									<div className="hide-lg">
										<ul className="nav-list">
											{navItems.map((item, index) => {
												return (
													<li
													key={index}
													className="nav-item"
													>
														<a
															className="small-caps"
															href={item.path}>
															{item.title}
														</a>
													</li>
												)
											})}
										</ul>
									</div>
								) : false}
							</div>

							<div className="col no-grow align-right">
								<Button
									className="secondary"
									href="/rsvp"
									label="RSVP"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
