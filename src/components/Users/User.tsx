import React, { FC } from "react";
import classes from "./users.module.css";
import Following from "../Common/Follow/Follow";
import { UserPhoto } from "../Common/UserPhoto/photo";
import { NavLink } from "react-router-dom";
import { UsersArrayType } from "../../Types/types";

export type PropsType = {
	user: any
	followInProgress: Array<number>
	followThunkCreator: (userId:number) => void
	unfollowThunkCreator: (userId:number) => void
	
}

export type UserArrayType = {
	name: string
	id: number
	photos: string
	status: string
}

const User:FC<PropsType> = React.memo(({ user, followInProgress, unfollowThunkCreator,
	 followThunkCreator, ...props }) => {

	return <div className={classes.Users}>

		<span>
			<div>{user.name}</div>
			<div className={classes.userPhoto}>
			<NavLink to={'/profile/' + user.id}>
			<UserPhoto photo={user.photos.small}
			isPhotoLoading={user.photos.isPhotoLoading}
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