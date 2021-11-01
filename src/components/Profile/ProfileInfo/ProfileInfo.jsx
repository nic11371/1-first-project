import React from 'react'
import Preloader from '../../Common/Preloader/preloader'
import classes from "./ProfileInfo.module.css"

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
			<img src={props.profile.photos.large} alt="" />
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo
