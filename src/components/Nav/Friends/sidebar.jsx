import React from 'react';
import classes from "./sidebar.module.css"

const Sidebar = (props) => {
	
	return (
		<div className={classes.sidebar}>
		<img src="https://cdn.pixabay.com/photo/2012/04/13/18/01/circle-33085_1280.png" alt="" />
			{props.name}
		</div>
	)
}

export default Sidebar