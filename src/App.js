import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Calendar from './components/calendar';
import Stream from './components/stream';

const App = () => {
	return (
		<BrowserRouter>
			<nav>
				<NavLink exact activeStyle={{ textDecoration: 'underline' }} to="/">
					Stream
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
				<Route exact path="/" component={Stream} />
				<Route exact path="/calendar" component={Calendar} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
