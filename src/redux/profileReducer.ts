import { ProfileType, PostType, PhotosType } from '../Types/types';
import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { updateObjectInArray } from "../utilites/helper/followHelpers";

const ADD_POST = "network/profile/ADD-POST";
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const SET_STATUS = 'network/profile/SET_STATUS';
const REMOVE_POST = "network/profile/REMOVE_POST";
const SAVE_PHOTO = "network/profile/SAVE_PHOTO";
const TOGGLE_IS_PROFILE_UPDATE = "network/profile/TOGGLE_IS_PROFILE_UPDATE";
const USER_CURRENT_FOLLOWED = "network/profile/USER_CURRENT_FOLLOWED";
const USER_CURRENT_UNFOLLOWED = "network/profile/USER_CURRENT_UNFOLLOWED";
const USER_CURRENT = "network/profile/USER_CURRENT";
const USER_CURRENT_GLOBAL = "network/profile/USER_CURRENT_GLOBAL";
const SAVE_PHOTO_LOADING = "network/profile/SAVE_PHOTO_LOADING"

const initialState = {
	posts: [
		{ id: 1, message: "Hi, do you do", count: 422 },
		{ id: 2, message: "My name is Nikolay", count: 35 },
		{ id: 3, message: "", count: 0 },
		{ id: 4, message: "", count: 68 },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: "" as string,
	isProfileUpdate: false as boolean,
	profileFollowed: [true] as any,
	//Object.values(JSON.parse(localStorage.getItem("profileFollowed"))),
	isPhotoLoading: false as boolean
}
export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action:any) => {

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
				...state, profile: action.payload
			}
		case SET_STATUS:
			return {
				...state, status: action.status
			}
		case SAVE_PHOTO:
			return {
				...state, profile: { ...state.profile, photos: action.photos }
			}
		case SAVE_PHOTO_LOADING:
			return {
				...state, isPhotoLoading: action.isPhotoLoading
			}
		case TOGGLE_IS_PROFILE_UPDATE:
			return {
				...state, isProfileUpdate: action.isProfileUpdate
			}
		case USER_CURRENT:
			return {
				...state, profileFollowed: [action.followed],
			}
		case USER_CURRENT_FOLLOWED:
			return {
				...state, profileFollowed:
					updateObjectInArray(state.profileFollowed, action.userId, "id", { followed: true })
			}
		case USER_CURRENT_UNFOLLOWED:
			return {
				...state, profileFollowed:
					updateObjectInArray(state.profileFollowed, action.userId, "id", { followed: false })
			}
		case USER_CURRENT_GLOBAL:
			return {
				...state, window: localStorage.setItem('profileFollowed',
					JSON.stringify([action.followedGlobal]))
			}

		default:
			return state;
	}
}

export type AddPostActionCreatorType = {type: typeof ADD_POST, newPostText: string}
export const addPostActionCreator = (newPostText:string):AddPostActionCreatorType => 
({ type: ADD_POST, newPostText })
export type SetUserProfileType = {type: typeof SET_USER_PROFILE, payload: SetUserProfilePayloadType}
export type SetUserProfilePayloadType = {profile: ProfileType, isProfileUpdate: boolean}
export const setUserProfile = (profile: ProfileType, isProfileUpdate: boolean):any =>
	({ type: SET_USER_PROFILE, payload: profile, isProfileUpdate })
export type SetStatusType = {type: typeof SET_STATUS, status: string}
export const setStatus = (status:string): SetStatusType => ({ type: SET_STATUS, status })
export type RemovePostActionCreatorType = {type: typeof REMOVE_POST, postId: number}
export const removePostActionCreator = (postId:number):RemovePostActionCreatorType => 
({ type: REMOVE_POST, postId })
export type SAVE_PHOTOType = {type: typeof SAVE_PHOTO, photos: PhotosType}
export const savePhotoSuccess = (photos: PhotosType): SAVE_PHOTOType =>
	({ type: SAVE_PHOTO, photos })
export type SavePhotoLoading = {type: typeof SAVE_PHOTO_LOADING, isPhotoLoading:boolean}
export const savePhotoLoading = (isPhotoLoading:boolean): SavePhotoLoading =>
	({ type: SAVE_PHOTO_LOADING, isPhotoLoading })
export type ToggleIsProfileUpdateType = { type: typeof TOGGLE_IS_PROFILE_UPDATE, isProfileUpdate:boolean}
export const toggleIsProfileUpdate = (isProfileUpdate:boolean): ToggleIsProfileUpdateType =>
	({ type: TOGGLE_IS_PROFILE_UPDATE, isProfileUpdate })
export default profileReducer;
export type UserFollowedType = {type: typeof USER_CURRENT, followed: boolean}
export const userFollowed = (followed:boolean):UserFollowedType => 
({ type: USER_CURRENT, followed })
export type FollowedUserType = {type: typeof USER_CURRENT_FOLLOWED, userID:number}
export const followedUser = (userId:number) => ({ type: USER_CURRENT_FOLLOWED, userId })
export type UnfollowedUserType = {type: typeof USER_CURRENT_UNFOLLOWED, userId: number}
export const unfollowedUser = (userId:number): UnfollowedUserType => ({ type: USER_CURRENT_UNFOLLOWED, userId })
export type UserFollowedGlobal = {type: typeof USER_CURRENT_GLOBAL, followedGlobal: boolean}
export const userFollowedGlobal = (followedGlobal:boolean):UserFollowedGlobal =>
 ({ type: USER_CURRENT_GLOBAL, followedGlobal })

export const getProfileThunkCreator = (userId:number) => async (dispatch:any) => {
	const response = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(response, true));
}

export const getUserStatusThunkCreator = (userId:number) => async (dispatch:any) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data));
}

export const updateStatusThunkCreator = (status:string) => async (dispatch:any) => {
	try {
		const response = await profileAPI.updateStatus(status)
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	}
	catch (error) {
		alert("Error")
		//можно задиспатчить что-то
	}
}

export const updatePhotoThunkCreator = (photo:PhotosType) => async (dispatch:any) => {
	dispatch(savePhotoLoading(true))
	const response = await profileAPI.savePhoto(photo)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoLoading(false))
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}

export const dataFormThunkCreator = (profile:ProfileType) =>
 async (dispatch:any, getState:any) => {
	const userId = getState().auth.userId
	const response = await profileAPI.updateProfile(profile)
	if (response.data.resultCode === 0) {
		dispatch(getProfileThunkCreator(userId));
		dispatch(toggleIsProfileUpdate(true));

	} else {
		let key = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
		dispatch(toggleIsProfileUpdate(false));
		dispatch(stopSubmit('profileEdit', {
			contacts: { [key]: response.data.messages[0] },
		}
			//dispatch(stopSubmit("profileEdit", { _error: response.data.messages[0] }
			//{"contacts": {"facebook": response.data.messages[0]}}


		))

		return Promise.reject(response.data.messages[0])
	}
}