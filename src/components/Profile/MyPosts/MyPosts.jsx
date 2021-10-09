import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {

let posts = [
	{message: "Hi, do you do", count: 422},
	{message: "My name is Nikolay", count: 35},
	{message: "", count: 0},
	{message: "", count: 68},
	{message: "", count: 4},
]

	return (
		<div className={classes.MyPosts}>
			<h3 className={classes.MyPostsBlock}>My Posts</h3>
			<div>
				<div>
				<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
				<div><button>Add Post</button>
					<button>Remove</button>
				</div>
			</div>
			<div className={classes.posts}>
			{posts.map( p => <Post message={p.message} count={p.count} />) }
			</div>
		</div>
	)
}

export default MyPosts
