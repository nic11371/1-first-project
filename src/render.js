import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './components/redux/state';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}

