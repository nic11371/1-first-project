import React from 'react'
import StoreContext from '../../../StoreContext';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer'
import MyPosts from './MyPosts'


const MyPostsContainer = () => {

	return (
		<StoreContext.Consumer>
		 {
			(store) => {
				let state = store.getState();
				let addPost = () => {
					store.dispatch(addPostActionCreator());
				}

				let postChange = (text) => {
					let action = updateNewPostTextActionCreator(text);
					store.dispatch(action)
				}
				return <MyPosts updateNewPostText={postChange} addPost={addPost}
					posts={state.profilePage.posts}
					newPostText={state.profilePage.newPostText}
				/>
			}
		}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer
