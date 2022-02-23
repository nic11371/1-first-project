import React from 'react'
import classes from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ profile, status, updateStatus, users, isOwner, 
	savePhoto, isProfileUpdate, toggleIsProfileUpdate, isPhotoLoading, ...props }) => {

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
				savePhoto={savePhoto}
				isProfileUpdate={isProfileUpdate}
				toggleIsProfileUpdate={toggleIsProfileUpdate}
				isPhotoLoading={isPhotoLoading}
			/>
			<MyPostsContainer />
		</div>

	)
}

export default Profile
