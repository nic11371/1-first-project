import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Message/Messages"
import { Field, reduxForm } from 'redux-form'

const DialogsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}  >
			<div> 
				<Field name={"newMessageText"} component={"textarea"} type={"textarea"}
					placeholder={"Input message"} />
				<button className={classes.button}>Sent</button>
			</div>
			<div>
			
			</div>
		</form>

	)
}

const DialogsRedux = reduxForm({form: "message"})(DialogsForm)

const Dialogs = (props) => {

	const onSubmit = (values) => {
		props.addMessage(values.newMessageText);
	}

	return (
		<div className={classes.Dialogs}>
		<div className={classes.DialogsItems}> {props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)}</div>
		<div className={classes.messages}>{props.dialogsPage.messages.map(m => <Messages message={m.message} key={m.id} />)}</div>
			<DialogsRedux onSubmit={onSubmit} />
		</div>	
				
	)
}

export default Dialogs
