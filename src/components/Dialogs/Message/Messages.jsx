import React from 'react'
import classes from "./Messages.module.css"

const Messages = (props) => {


	return (
		
		<div className={classes.message}>
		<img src="http://www.clipartbest.com/cliparts/KTj/oRM/KTjoRMREc.png" alt="" />
		{props.message}</div>
	)
}

export default Messages

