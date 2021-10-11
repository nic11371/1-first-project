import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {

	let post = props.posts.map(p => <Post message={p.message} count={p.count} />)

	let newPostElement = React.createRef();
	let addPost = () => {
		
	let text = newPostElement.current.value;
		props.addPost(text);
		//newPostElement.current.value = "";
	}



return (
	<div className={classes.MyPosts}>
		<h3 className={classes.MyPostsBlock}>My Posts</h3>
		<div>
			<div>
				<textarea ref={newPostElement} cols="15" rows="5"></textarea>
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
