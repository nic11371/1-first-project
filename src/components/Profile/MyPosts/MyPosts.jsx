import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
	let post = props.posts.map(p => <Post message={p.message} count={p.count} />)
	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
	
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={classes.MyPosts}>
			<h3 className={classes.MyPostsBlock}>My Posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} 
						value={props.newPostText} />
				</div>
				<div><button onClick={onAddPost}>Add Post</button>
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
