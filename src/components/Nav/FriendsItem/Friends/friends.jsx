import React from 'react';
import classes from "./friends.module.css"

const Friends = (props) => {
	
	return (
		<div className={classes.friends}>
		<img src="https://cdn.pixabay.com/photo/2012/04/13/18/01/circle-33085_1280.png" alt="" />
			{props.name}
		</div>
	)
}

export default Friends

