import React from 'react';
import classes from "./friends.module.css"

const Friends = (props) => {
	
	return (
		<div className={classes.friends}>
		<img src="https://cdn.pixabay.com/photo/2012/04/13/18/01/circle-33085_1280.png?__cf_chl_jschl_tk__=pmd_eMXlensBA0KqoOIg_oJeB3BoGBqb9u91rxuqYUWDe.I-1635876847-0-gqNtZGzNAlCjcnBszQqR" alt="" />
			{props.name}
		</div>
	)
}

export default Friends

