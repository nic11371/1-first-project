import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

// store.subscribe(() => {
// 	localStorage.setItem('profileFollowed',
// 	 JSON.stringify([store.getState().profilePage.profileFollowed]));
// })

// const persistedState = localStorage.getItem('profileFollowed') 
//                        ?  Object.value(JSON.parse(localStorage.getItem('profileFollowed')))
//                        : []

//@ts-ignore
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, 
	composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.__store__ = store;
export default store;
