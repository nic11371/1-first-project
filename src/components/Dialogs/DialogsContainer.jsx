import React from 'react'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	let changeMessage = (message) => {
		props.store.dispatch(updateMessageTextActionCreator(message));
	}

	return (
		<Dialogs addMessage={addMessage} changeMessage={changeMessage} 
		dialogsPage={state}
		/>
	)
}

export default DialogsContainer
