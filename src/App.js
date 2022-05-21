import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Calendar from './components/calendar';
import Nps from './page/nps';

const App = () => {
	return (
		<BrowserRouter>
			<nav>
				<NavLink exact activeStyle={{ textDecoration: 'underline' }} to="/">
					Customer Satisfaction
				</NavLink>
				<NavLink
					exact
					activeStyle={{ textDecoration: 'underline' }}
					to="/calendar"
				>
					Calendar
				</NavLink>
			</nav>
			<Switch>
				<Route exact path="/" component={Nps} />
				<Route exact path="/calendar" component={Calendar} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
