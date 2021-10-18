import React from 'react';
import classes from "./friendsItem.module.css"
import Friends from "./Friends/friends"
import StoreContext from '../../../StoreContext';

const FriendsItem = () => {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState().sidebar;
					return <div className={classes.friendsItem}>
						{state.friends.map(f =>
							<Friends name={f.name} />)} </div>
				}
			}

		</StoreContext.Consumer>
	)

}

export default FriendsItem