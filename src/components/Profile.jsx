import React from 'react'
import classes from "./Profile.module.css"

const Profile = () => {
	return (
		<div className={classes.profile}>
			<div>
				<img src="https://images8.alphacoders.com/790/790793.jpg" alt="" />
			</div>
			<div>
				ava + description
			</div>
			<div>
				My Posts
				<div>
					New Post
				</div>
				<div className={classes.Posts}>
					<div className={classes.item}>
						Post1
					</div>
					<div className={classes.item}>
						Post2
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
