import React from 'react'
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
	return (
		<div className={classes.ProfileInfo}>
			<div>
				<img src="https://images8.alphacoders.com/790/790793.jpg" alt="" />
			</div>
			<div className={classes.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo
