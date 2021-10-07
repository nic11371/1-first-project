import React from 'react'
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
	return (
		<div className={classes.dialog + ' ' + classes.active}>
			<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
		</div>
	)
}

const Messages = (props) => {
	return (
		<div className={classes.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogItem name="Nikolay" id="1" />
				<DialogItem name="Ruslan" id="2" />
				<DialogItem name="Dima" id="3" />
				<DialogItem name="Vovan" id="4" />
				<DialogItem name="Hryak" id="5" />
			</div>
			<div className={classes.messages}>
				<Messages message="Hi" />
				<Messages message="How, are you?" />
				<Messages message="Yes" />
			</div>
		</div>

	)

}

export default Dialogs
