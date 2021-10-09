import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{message: "Hi, do you do", count: 422},
	{message: "My name is Nikolay", count: 35},
	{message: "", count: 0},
	{message: "", count: 68},
	{message: "", count: 4},
]

let dialogsData = [
	{id: 1, name: "Nikolay"},
	{id: 2, name: "Ruslan" },
	{id: 3, name: "Dima"   },
	{id: 4, name: "Vovan"  },
	{id: 5, name: "Pavel"  },
]

let messagesData = [
{message: "Hi"}, {message: "How, are you?"}, {message: "Yes"}, {message: "Goodbay Vovan"}, {}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

