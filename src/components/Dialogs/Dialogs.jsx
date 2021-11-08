import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Message/Messages"
import { Redirect } from 'react-router'

const Dialogs = (props) => {
	let newElement = React.createRef();
	
	let state = props.dialogsPage;

	let onAddMessage = () => {
		props.addMessage();
	}

	let onChangeMessage = () => {
		let message = newElement.current.value;
		props.changeMessage(message);
	}

	if (!props.isAuth) return <Redirect to={"/login"} />

	return (
		<div className={classes.Dialogs}>
			<div className={classes.DialogsItems}>
				{state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />)}	
			</div>
			<div className={classes.messages}>
			{ state.messages.map( m => <Messages message={m.message} key={m.id} />)}
			</div>
			<textarea 
			onChange={onChangeMessage} 
			ref={newElement}
			value={state.newMessageText} />
		<button className={classes.button} onClick={onAddMessage}>Sent</button>
		</div>
	)
}

export default Dialogs
