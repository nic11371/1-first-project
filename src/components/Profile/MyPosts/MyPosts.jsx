import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"


export const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={"newPostText"} placeholder={"Input Post"} component={"textarea"} type={"textarea"} />
			</div>
			<span>
				<button id={'add'}>Add Post</button>
			</span>
			<span>
				<button id={'remove'}>Remove Post</button>
			</span>
		</form>
	)
}

const PostReduxForm = reduxForm({ form: "post"})(PostForm)

const MyPosts = (props) => {

	const onSubmit = (values) => {
		props.addPost(values.newPostText);
	}

	return ( 
		<div className={classes.MyPosts}>
		<h2 className={classes.MyPostsBlock}>My Posts</h2>

		<PostReduxForm onSubmit={onSubmit} />
		<div>
		{props.posts.map(p => <Post message={p.message} count={p.count} key={p.id} />)}
		</div>
</div>
	)
}

export default MyPosts
