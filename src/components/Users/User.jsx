import React from "react";
import userPhoto from "./../../assets/img/1.png";
import classes from "./users.module.css";
import { NavLink } from 'react-router-dom';

const User = React.memo(({user, followInProgress, unfollowThunkCreator, followThunkCreator }) => {

	return <div className={classes.Users}>

		<span>
			<div>{user.name}</div>
			<div>
				<NavLink to={'/profile/' + user.id}>
					<img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={classes.userPhoto} />
				</NavLink>
			</div>
			<div>Followed
				{user.followed ? <button disabled={followInProgress.some(id => id === user.id)}
					onClick={() => {
						unfollowThunkCreator(user.id)
					}}
				> Unfollow </button>
					: <button disabled={followInProgress.some(id => id === user.id)}
						onClick={() => {
							followThunkCreator(user.id)
						}}
					>Follow</button>}
			</div>
			<div>{user.status}</div>
			{/* <div>{u.location.country}
					{u.location.city}</div> */}
		</span>
	</div>
}

)
export default User