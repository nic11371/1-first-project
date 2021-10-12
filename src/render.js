import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText, 
	addMessage, updateMessageText } from './components/redux/state';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText}
				addMessage={addMessage}
				updateMessageText={updateMessageText}	
				/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

