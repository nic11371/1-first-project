import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
	
let post = props.posts.map( p => <Post message={p.message} count={p.count} />)
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
			{post}
			</div>
		</div>
	)
}

export default MyPosts
