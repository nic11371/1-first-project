import reportWebVitals from './reportWebVitals';
import store from './components/redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const addMessage = "ADD-MESSAGE";
const updateMessageText = "UPDATE-MESSAGE-TEXT";

	let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={store.getState()}
			dispatch={store.dispatch.bind(store)}
			// addPost={store.addPost.bind(store)}
			// 	updateNewPostText={store.updateNewPostText.bind(store)}
			// 	addMessage={store.addMessage.bind(store)}
			// 	updateMessageText={store.updateMessageText.bind(store)}	
				/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

