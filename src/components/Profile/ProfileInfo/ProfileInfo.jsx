import React from 'react'
import Preloader from '../../Common/Preloader/preloader'
import classes from "./ProfileInfo.module.css"
import ProfileSocial from './ProfileSocial'
import userPhoto from "./../../../assets/img/1.png";
import ProfileStatusHook from './ProfileStatusHook'

const ProfileInfo = React.memo(({profile, status, updateStatus}) => {
	if(!profile) {
		return <Preloader />
	}
	return (
		<div className={classes.ProfileInfo}>
		
			{/* <div>
				<img src="https://images8.alphacoders.com/790/790793.jpg" alt="" />
			</div> */}
			
			<div className={classes.descriptionBlock}>
			<div>{profile.fullName}</div>
			<img src={profile.photos.large != null ?
			 profile.photos.large : userPhoto} alt="" />
			 <ProfileStatusHook status={status} updateStatus={updateStatus} />
			<div>{profile.lookingForAJob}</div>
			<div>{profile.lookingForAJobDescription}</div>
			<div><ProfileSocial profile={profile.contacts}/></div>
		
			</div>
		</div>
		
	)
});

export default ProfileInfo
