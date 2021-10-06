import React from 'react'
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts" 

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
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile
