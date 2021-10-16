import React from 'react';
import classes from "./friendsItem.module.css"
import Friends from "./Friends/friends"

const FriendsItem = (props) => {
	return (
		<div className={classes.friendsItem}>{props.state.friends.map(f => 
		<Friends name={f.name} />)} </div>
	)
}

export default FriendsItem