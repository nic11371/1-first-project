import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
	return (
		<div className={classes.MyPosts}>
		<div>
			<textarea name="" id="" cols="30" rows="10"></textarea>
			<button>Add Post</button>
			<button>Remove</button>
		</div>
			<Post message="Hi, do you do" count="422"/>
			<Post message="My name is Nikolay" count="35"/>
			<Post count="0"/>
			<Post count="0"/>
			<Post count="4"/>
		</div>
	)
}

export default MyPosts
