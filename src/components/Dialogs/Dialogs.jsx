import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Message/Messages"
import { addMessageActionCreator, updateMessageTextActionCreator } from '../redux/dialogsReducer';

const Dialogs = (props) => {
	let newElement = React.createRef();
	
	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}

	let onChangeMessage = () => {
		let message = newElement.current.value;
		props.dispatch(updateMessageTextActionCreator(message));
	}

	return (
		<div className={classes.Dialogs}>
			<div className={classes.DialogsItems}>
				{props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)}	
			</div>
			<div className={classes.messages}>
			{ props.dialogsPage.messages.map( m => <Messages message={m.message} />)}
			</div>
			<textarea 
			onChange={onChangeMessage} 
			ref={newElement}
			value={props.dialogsPage.newMessageText} />
		<button className={classes.button} onClick={addMessage}>Sent</button>
		</div>
	)
}

export default Dialogs
