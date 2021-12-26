import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import Friends from "./components/Friends/Friends";
import HeaderContainer from './components/Header/HeaderContainer';
import Music from "./components/Music/Music";
import Nav from './components/Nav/Nav';
import News from "./components/News/News";
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from "./components/Settings/Settings";
import { initializeAppThunkCreator } from './redux/appReducer';
import { withRouter } from 'react-router';
import Preloader from './components/Common/Preloader/preloader';
import { initialized } from './AppSelectors';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = lazy(() => import('./components/Login/login'));
const UsersContainer = lazy(() => import('./components/Users/usersContainer'));


class App extends React.Component {
	catchAllUnhandledErrors = (reason, promise) => {
		alert("Some error occured");
		console.error(promise)
	}
	componentDidMount() {
		this.props.initializeAppThunkCreator();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}


		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Nav />
				<div className="app-wrapper-content">
					<Switch >
						<Redirect exact from="/" to="/profile" />
						<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
						<Route path='/dialogs' render={withSuspense(DialogsContainer)} />
						<Route path='/news' render={() => <News />} />
						<Route path='/music' render={() => <Music />} />
						<Route path='/settings' render={() => <Settings />} />
						<Route path='/friends' render={() => <Friends />} />
						<Route path='/users' render={withSuspense(UsersContainer)} />
						<Route path='/login' render={withSuspense(Login)} />
						<Route path='*' render={() => <div>ERROR: 404 NOT FOUND</div>} />
					</Switch>
				</div>

			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	initialized: initialized(state)
})

export default compose(
	connect(mapStateToProps, { initializeAppThunkCreator }),
	withRouter)(App);
