import React from 'react'
import Preloader from '../../Common/Preloader/preloader'
import classes from "./ProfileInfo.module.css"
import ProfileSocial from './ProfileSocial'

const ProfileInfo = (props) => {
	if(!props.profile) {
		return <Preloader />
	}

	return (
		<div className={classes.ProfileInfo}>
			<div>
				<img src="https://images8.alphacoders.com/790/790793.jpg" alt="" />
			</div>
			<div className={classes.descriptionBlock}>
			<div>{props.profile.fullName}</div>
			<img src={props.profile.photos.large} alt="" />
			<div>{props.profile.lookingForAJob}</div>
			<div>{props.profile.lookingForAJobDescription}</div>
			<div><ProfileSocial profile={props.profile.contacts}/></div>
		
			</div>
		</div>
	)
}

export default ProfileInfo
