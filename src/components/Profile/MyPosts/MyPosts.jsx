import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const MyPosts = (props) => {

	let post = props.posts.map(p => <Post message={p.message} count={p.count} />)
	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({type: ADD_POST});
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({type: UPDATE_NEW_POST_TEXT, newText: text})
	}

	return (
		<div className={classes.MyPosts}>
			<h3 className={classes.MyPostsBlock}>My Posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} cols="15" rows="5"
						value={props.newPostText} />
				</div>
				<div><button onClick={addPost}>Add Post</button>
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
