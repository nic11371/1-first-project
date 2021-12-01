import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const REMOVE_POST = "REMOVE_POST"

const initialState = {
	posts: [
		{ id: 1, message: "Hi, do you do", count: 422 },
		{ id: 2, message: "My name is Nikolay", count: 35 },
		{ id: 3, message: "", count: 0 },
		{ id: 4, message: "", count: 68 }, 
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { id: 5, message: action.newPostText, count: 0 }],
			}
			case REMOVE_POST:
			return {
				...state, posts: state.posts.filter(r => r.id != action.postId)
			}
		case SET_USER_PROFILE:
			return {
				...state, profile: action.profile
			}
		case SET_STATUS:
			return {
				...state, status: action.status
			}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const removePostActionCreator = (postId) => ({type: REMOVE_POST, postId})
export default profileReducer;

export const getProfileThunkCreator = (userId) => (dispatch) => {
	profileAPI.getProfile(userId)
		.then(response => {
			dispatch(setUserProfile(response));

		})
}

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(setStatus(response.data))
		});
}

export const updateStatusThunkCreator = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status))
			}
		});
}