import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Message/Messages"

const Dialogs = (props) => {

	return (
		<div className={classes.Dialogs}>
			<div className={classes.DialogsItems}>
				{props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} />)}	
			</div>
			<div className={classes.messages}>
			{ props.messagesData.map( m => <Messages message={m.message} />)}
			</div>
		</div>
	)
}

export default Dialogs
