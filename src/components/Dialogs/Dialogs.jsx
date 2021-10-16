import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Message/Messages"

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const Dialogs = (props) => {
	let newElement = React.createRef();
	
	let addMessage = () => {
		props.dispatch({type: ADD_MESSAGE});
	}

	let onChangeMessage = () => {
		let message = newElement.current.value;
		props.dispatch({type: UPDATE_MESSAGE_TEXT, newTextMessage:message });
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
			cols="10" rows="3" 
			value={props.dialogsPage.newMessageText} />
		<button className={classes.button} onClick={addMessage}>Sent</button>
		</div>
	)
}

export default Dialogs
