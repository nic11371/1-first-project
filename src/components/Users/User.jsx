import React from "react";
import classes from "./users.module.css";
import Following from "../Common/Follow/Follow";
import { UserPhoto } from "../Common/UserPhoto/photo";
import { NavLink } from "react-router-dom";

const User = React.memo(({ user, followInProgress, unfollowThunkCreator,
	 followThunkCreator, ...props }) => {
	// const followInProgressDisabled = () => {
	// 	return followInProgress.some(id => id === user.id)
	// }
	return <div className={classes.Users}>

		<span>
			<div>{user.name}</div>
			<div className={classes.userPhoto}>
			<NavLink to={'/profile/' + user.id} >
			<UserPhoto photo={user.photos.small}
			user={user} />
			</NavLink>
		</div>
			<div>Following:
				<Following followInProgress={followInProgress}
					followThunkCreator={followThunkCreator}
					unfollowThunkCreator={unfollowThunkCreator}
					user={user}
				/>
			</div>
			<div>{user.status}</div>
			{/* <div>{u.location.country}
					{u.location.city}</div> */}
		</span>
	</div>
}

)
export default User