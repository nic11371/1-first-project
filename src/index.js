import reportWebVitals from './reportWebVitals';
import store from './components/redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App 
			dispatch={store.dispatch.bind(store)}
			store={store}
		/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());

//вызывается анонимная ф-я, в которой вызывается перерисовка, а в ней передаеться state
//сделано из-за того, что реальный redux не передает в подписчике state
//анонимная ф-я это callback
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});

reportWebVitals();

