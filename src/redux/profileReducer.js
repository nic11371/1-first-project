import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "network/profile/ADD-POST";
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const SET_STATUS = 'network/profile/SET_STATUS';
const REMOVE_POST = "network/profile/REMOVE_POST";
const SAVE_PHOTO = "SAVE_PHOTO";

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
		case SAVE_PHOTO:
			return {
				...state, profile: {...state.profile, photos: action.photos}
			}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const removePostActionCreator = (postId) => ({ type: REMOVE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO, photos })
export default profileReducer;

export const getProfileThunkCreator = (userId) => async (dispatch) => {
	const response = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(response));
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data));
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const updatePhotoThunkCreator = (photo) => async (dispatch) => {
	const response = await profileAPI.savePhoto(photo)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}

export const dataFormThunkCreator = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.userId
	const response = await profileAPI.updateProfile(profile)
	if (response.data.resultCode === 0) {
		dispatch(getProfileThunkCreator(userId))
	} else{
		dispatch(stopSubmit("profileEdit", {_error: response.data.messages[0]}
	
		//{"contacts": {"facebook": response.data.messages[0]}}
		))
		return Promise.reject(response.data.messages[0])
	}
}