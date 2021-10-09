import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Message/Messages"

const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: "Nikolay"},
		{id: 2, name: "Ruslan" },
		{id: 3, name: "Dima"   },
		{id: 4, name: "Vovan"  },
		{id: 5, name: "Pavel"  },
	]

	let messagesData = [
	{message: "Hi"}, {message: "How, are you?"}, {message: "Yes"}, {message: "Goodbay"}, {}
	]

	return (
		<div className={classes.Dialogs}>
			<div className={classes.DialogsItems}>
				{dialogsData.map( d => <DialogItem name={d.name} id={d.id} />)}	
			</div>
			<div className={classes.messages}>
			{ messagesData.map( m => <Messages message={m.message} />)}
			</div>
		</div>
	)
}

export default Dialogs
