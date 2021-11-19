import { connect } from 'react-redux'
import { addPostActionCreator, removePostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText))
		},
		removePost: () => {
			dispatch(removePostActionCreator())
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
