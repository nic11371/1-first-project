import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utilites/validation/validation'
import { Textarea } from '../../Common/FormsControls/FormsControls'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const maxLength50 = maxLengthCreator(50);

export const PostForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field name={"newPostText"} placeholder={"Input Post"} 
				component={Textarea} type={"textarea"} 
				validate={[required, maxLength50]}
				/>
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

class MyPosts extends PureComponent {
  render() {
	  
    const onSubmit = values => {
      this.props.addPost(values.newPostText);
    };

    return (<div className={classes.MyPosts}>
		<h2 className={classes.MyPostsBlock}>My Posts</h2>

		<PostReduxForm onSubmit={onSubmit} />
		<div>
		{this.props.posts.map(p => <Post message={p.message} count={p.count} key={p.id} />)}
		</div>
    </div>);
  }

}

export default MyPosts
