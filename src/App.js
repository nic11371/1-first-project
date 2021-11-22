import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Friends from "./components/Friends/Friends";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import Music from "./components/Music/Music";
import Nav from './components/Nav/Nav';
import News from "./components/News/News";
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/usersContainer';
import { initializeAppThunkCreator } from './redux/appReducer';
import { withRouter } from 'react-router';
import Preloader from './components/Common/Preloader/preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeAppThunkCreator()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}


		return (<BrowserRouter>
			<div className="app-wrapper">
				<HeaderContainer />
				<Nav />
				<div className="app-wrapper-content">
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/friends' render={() => <Friends />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <Login />} />
				</div>
			</div>
		</BrowserRouter>);
	}

}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	connect(mapStateToProps, { initializeAppThunkCreator }),
	withRouter)(App);
