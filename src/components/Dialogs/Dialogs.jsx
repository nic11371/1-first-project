import React from 'react'
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<div className={classes.dialog + ' ' + classes.active}>
				<NavLink to="/dialogs/1">Nikolay</NavLink> 
				</div>
				<div className={classes.dialog}>
				<NavLink to="/dialogs/2">Dmitry</NavLink> 
				</div>
				<div className={classes.dialog}>
				<NavLink to="/dialogs/3">Ruslan</NavLink> 
				</div>
				<div className={classes.dialog}>
				<NavLink to="/dialogs/4">Vovan</NavLink> 
				</div>
				<div className={classes.dialog}>
				<NavLink to="/dialogs/5">Hryak</NavLink> 
				</div>
			</div>
			<div className={classes.messages}>
			<div className={classes.message}>Hi</div>
			<div className={classes.message}>How, are you?</div>
			<div className={classes.message}>Yes</div>
			</div>
		</div>
		
	)

}

export default Dialogs
