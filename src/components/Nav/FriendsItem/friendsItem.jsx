import React from 'react';
import classes from "./friendsItem.module.css"
import Friends from "./Friends/friends"

const FriendsItem = ({sidebar}) => {

	return (
		<div className={classes.friendsItem}>{sidebar.friends.map(f => 
		<Friends name={f.name} key={f.id} />)} </div>
	)
}

export default FriendsItem