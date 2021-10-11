import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Message/Messages"

const Dialogs = (props) => {
	let newElement = React.createRef();
	let addMessage = () => {
		let message = newElement.current.value;
		alert(message)
	}
	return (
		<div className={classes.Dialogs}>
			<div className={classes.DialogsItems}>
				{props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)}	
			</div>
			<div className={classes.messages}>
			{ props.state.messages.map( m => <Messages message={m.message} />)}
			</div>

			<textarea name=" " ref={newElement} cols="10" rows="3"></textarea>
		<button className={classes.button} onClick={addMessage}>Sent</button>
		</div>
	)
}

export default Dialogs
