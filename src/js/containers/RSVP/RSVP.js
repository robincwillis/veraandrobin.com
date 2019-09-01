import React, { Component } from 'react';

import { Input, Select, Radio, Button } from 'gw-ui';

import Background from 'components/Background';
import Reef2 from 'assets/images/reef-2.jpg';


class RSVP extends Component {

	state = {
		status: '',
		name: '',
		count: 1,
		submitting: false,
		submitted: false
	}

	handleClick = (event) => {

	}

	render() {
		const { status, name, count } = this.state;

		return (
			<div className="page container">
				<section>
					<div className="grid-flex center break-lg">
						<div className="col-8">
							<h3>RSVP</h3>
							<div className="my-3">
								<h6 className="my-2">RSVP for your entire party.</h6>
								<Input
								 	label="Full Name"
									name="Full Name"
									value={name}
									onChange={(event) => this.setState({name: event.target.value})}
								 />
							</div>
							<div className="my-3">
								<h6 className="my-2">Are you able to make it?</h6>
								<Radio
									name="status"
									value="yes"
									label="Yes"
									onChange={(event) => this.setState({status:'yes'})}
								/>
								<Radio
									name="status"
									value="no"
									label="No"
									onChange={(event) => this.setState({status: 'no'})}
								/>
								<Radio
									name="status"
									value="maybe"
									label="Maybe"
									onChange={(event) => this.setState({status: 'maybe'})}
								/>
							</div>

							<div className="my-3">
								<h6 className="my-2">How many people in your party?</h6>
								<Select
									label="asdf"
									options={[
										{
											label: 'One',
											value: 1
										},
										{
											label: 'Two',
											value: 2
										}
									]}
								/>
							</div>
							<div className="my-3 align-center">
								<Button
									label="Submit"
									onClick={this.handleClick}
								/>
							</div>
						</div>
					</div>
				</section>
				<Background image={Reef2} />
			</div>
		);
	}
}

export default RSVP;