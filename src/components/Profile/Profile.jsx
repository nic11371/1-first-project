import React from 'react'
import classes from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ profile, status, updateStatus, user, ...props }) => {

	return (
		<div className={classes.profile}>
			<ProfileInfo profile={profile}
				status={status}
				updateStatus={updateStatus}
				followInProgress={props.followInProgress}
				followThunkCreator={props.followThunkCreator}
				unfollowThunkCreator={props.unfollowThunkCreator}
				user={user}
			/>
			<MyPostsContainer />
		</div>

	)
}

export default Profile
