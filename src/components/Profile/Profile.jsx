import React from 'react'
import classes from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ profile, status, updateStatus, user, isOwner, savePhoto, ...props }) => {

	return (
		<div className={classes.profile}>
			<ProfileInfo profile={profile}
				isOwner={isOwner}
				status={status}
				updateStatus={updateStatus}
				followInProgress={props.followInProgress}
				followThunkCreator={props.followThunkCreator}
				unfollowThunkCreator={props.unfollowThunkCreator}
				user={user}
				savePhoto={savePhoto}
			/>
			<MyPostsContainer />
		</div>

	)
}

export default Profile
