import React from 'react'
import classes from "./DialogsItem.module.css"
import { NavLink } from 'react-router-dom'

const DialogItem = React.memo(({id, name}) => {
	return (
		<div className={classes.dialog + ' ' + classes.active}>
		<img src="https://image.shutterstock.com/shutterstock/photos/156985241/display_1500/stock-photo-color-wheel-flower-156985241.jpg" alt="" />
			<NavLink to={"/dialogs/" + id}>{name}</NavLink>
		</div>
	)
});


export default DialogItem
