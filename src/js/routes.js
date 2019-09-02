import React, { Fragment } from 'react';
import { Switch, Route  } from 'react-router-dom';

import Home from 'containers/Home';
import Travel from 'containers/Travel';
import RSVP from 'containers/RSVP';
import NotFound from 'containers/NotFound';

import Header from 'components/Header';

const DefaultLayout = ({ component: Component, ...rest }) => {
	return(
		<Route
			{...rest}
			render={ (props) => (
				<Fragment>
					<Header  />
					<Component {...rest} {...props} />
				</Fragment>
			)}
		/>
	);
}

const routes = (
	<Switch>
		<DefaultLayout exact path="/" component={Home}/>
		<DefaultLayout exact path="/travel" component={Travel} />
		<DefaultLayout exact path="/rsvp" component={RSVP} />
		<Route path="*" component={NotFound} />
	</Switch>
)


export default routes;
