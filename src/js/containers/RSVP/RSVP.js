import React, { Component, Fragment } from 'react';

import { Input, Select, Radio, Button } from 'gw-ui';

import Background from 'components/Background';
import Reef2 from 'assets/images/reef-2.jpg';

import './RSVP.scss';

class RSVP extends Component {

	state = {
		status: '',
		name: '',
		count: 1,
		guest: '',
		submitting: false,
		submitted: false,
		success: false,
		error: false
	}

  ajax (method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

	handleClick = (event) => {
		const { status, name, count, guest } = this.state;
		const form = { status, name, count, guest };
		const data = new FormData();
		for ( var key in form ) {
	    data.append(key, form[key]);
		}

		const url = 'https://formspree.io/mzwqlqpx';

		const success = () => this.setState({success: true})
		const error = () => this.setState({error: true})

    this.ajax('POST', url, data, success, error);
	}

	render() {
		const { status, name, count, success, error, guest } = this.state;
		const disabled = !name || name.length === 0 ||  !count ||  !status || status.length === 0;

		if (success) {
			return (
				<Fragment>
					<div className="page container">
						<section className="align-center">
							<h2 className="h1">Thank You!</h2>
						</section>
						<Background image={Reef2} />
					</div>
				</Fragment>
			)
		}

		if (error) {
			return (
				<Fragment>
					<div className="page container">
						<section className="align-center">
							<h2>Whoops Something went wrong, try again later!</h2>
						</section>
					</div>
					<Background image={Reef2} />
				</Fragment>
			)
		}

		return (
			<Fragment>
				<div className="page">
					<div className="container">
						<section>
							<div className="grid-flex center break-lg">
								<div className="col-6 stagger-in-items">
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
										<h6 className="my-2">Will you join us?</h6>
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
									</div>

									<div className="my-3">
										<h6 className="my-2">How many people in your party?</h6>
										<Select
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
											onChange={(event) => this.setState({count: event.target.value})}
										/>
									</div>
									{count > 1 ? (
										<div className="my-3">
											<Input
											 	label="Guest's Full Name"
												name="Guest Full Name"
												value={guest}
												onChange={(event) => this.setState({guest: event.target.value})}
											 />
										</div>
									) : false}
									<div className="my-3 align-center">
										<div className="btn-bg">
											<Button
												disabled={disabled}
												label="Submit"
												onClick={this.handleClick}
											/>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<Background image={Reef2} />
			</Fragment>
		);
	}
}

export default RSVP;