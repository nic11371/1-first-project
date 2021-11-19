import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Message/Messages"
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utilites/validation/validation'
import { Textarea } from '../Common/FormsControls/FormsControls'

const maxLength50 = maxLengthCreator(50)
const DialogsForm = (props) => {
	
	return (
		<form onSubmit={props.handleSubmit}  >
			<div> 
				<Field name={"newMessageText"} component={Textarea} type={"textarea"}
					validate={[required, maxLength50]} placeholder={"Input message"} />
				<button className={classes.button}>Send</button>
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
