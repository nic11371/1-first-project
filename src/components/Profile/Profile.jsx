import React from 'react'
import classes from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ profile, status, updateStatus, users, isOwner, 
	savePhoto, isProfileUpdate, toggleIsProfileUpdate, userId, ...props }) => {

	return (
		<div className={classes.profile}>
		 <ProfileInfo profile={profile}
				isOwner={isOwner}
				status={status}
				updateStatus={updateStatus}
				followInProgress={props.followInProgress}
				followThunkCreator={props.followThunkCreator}
				unfollowThunkCreator={props.unfollowThunkCreator}
				dataFormThunkCreator={props.dataFormThunkCreator}
				user={users}
				userId= {userId}
				savePhoto={savePhoto}
				isProfileUpdate={isProfileUpdate}
				toggleIsProfileUpdate={toggleIsProfileUpdate}
			/>
			<MyPostsContainer />
		</div>

	)
}

export default Profile
