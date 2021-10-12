import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import Friends from "./components/Friends/Friends"
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Nav state={props.state.sidebar}/>
				<div className="app-wrapper-content">
					<Route path='/profile' render={() => <Profile
						ProfilePage={props.state.profilePage} 
						addPost={props.addPost} 
							updateNewPostText={props.updateNewPostText}
						/>} />
					<Route path='/dialogs' render={() => <Dialogs
						dialogsPage={props.state.dialogsPage} 
						addMessage={props.addMessage}
						updateMessageText={props.updateMessageText} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/friends' render={() => <Friends />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
