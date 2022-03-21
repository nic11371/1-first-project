import { UsersArrayType } from './../Types/types';
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utilites/helper/followHelpers";
import {followedUser, unfollowedUser} from "./profileReducer"

const FOLLOWED = "network/users/FOLLOWED";
const UNFOLLOWED = "network/users/UNFOLLOWED";
const SET_USERS = "network/users/SET_USERS";
const SET_CURRENT_PAGE = "network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "network/users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOW_IN_PROGRESS = "network/users/TOGGLE_FOLLOW_IN_PROGRESS";

const initialState = {
	users: [] as Array<UsersArrayType>,
	pageSize: 15 as number,
	totalUsersCount: 0 as number | null,
	currentPage: 1 as number | null,
	isFetching: false as boolean,
	followInProgress: [] as Array<number>, //array of users id
	portionSize: 5 as number
};
export type InitialStateType = typeof initialState;
const usersReducer = (state = initialState, action:any) => {

	switch (action.type) {
		case FOLLOWED:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
				
			}
		case UNFOLLOWED:
			return {
				...state, 
				users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
				
			}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.count }
		}
		case TOGGLE_FOLLOW_IN_PROGRESS: {
			return {
				...state, followInProgress: action.isFetching ?
					[...state.followInProgress, action.userId] :
					state.followInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state;
	}
}
export type FollowedType = {type: typeof FOLLOWED, userId: number}
export const followed = (userId:number):FollowedType => ({ type: FOLLOWED, userId })
export type UnfollowedType = {type: typeof UNFOLLOWED, userId: number}
export const unfollowed = (userId:number): UnfollowedType => ({ type: UNFOLLOWED, userId })
export type SetUsersType = {type: typeof SET_USERS, users:Array<UsersArrayType>}
export const setUsers = (users:Array<UsersArrayType>): SetUsersType =>
 ({ type: SET_USERS, users })
export type SetCurrentPageType = {type: typeof SET_CURRENT_PAGE, currentPage: number}
export const setCurrentPage = (currentPage:number): SetCurrentPageType => 
({ type: SET_CURRENT_PAGE, currentPage })
export type SetTotalUsersCountType = {type: typeof SET_TOTAL_USERS_COUNT, count: number}
export const setTotalUsersCount = (totalUsersCount:number):SetTotalUsersCountType => 
({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export type ToggleIsFetchingType = {type: typeof TOGGLE_IS_FETCHING, count: boolean}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingType => 
({ type: TOGGLE_IS_FETCHING, count: isFetching })
export type ToggleFollowInProgressType = {type: typeof TOGGLE_FOLLOW_IN_PROGRESS, isFetching: boolean, userId: number}
export const toggleFollowInProgress = (isFetching: boolean, userId:number):ToggleFollowInProgressType =>
 ({ type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId })


export const getUsersThunkCreator = (currentPage:number, pageSize:number, portionSize:number) => 
async (dispatch:any) => {
	dispatch(toggleIsFetching(true));
	const response = await usersAPI.getUsers(currentPage, pageSize)
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(response.items));
			dispatch(setTotalUsersCount(response.totalCount));
}

export const followThunkCreatorFlow = async (dispatch:any, userId:number, 
	apiMethod:any, actionCreatorFlow:any, actionCreatorFlowProfile:any) => {
	dispatch(toggleFollowInProgress(true, userId))
	const response = await apiMethod(userId)
			if (response.resultCode === 0) {
				dispatch(actionCreatorFlow(userId))
				dispatch(actionCreatorFlowProfile(userId))
				
			}
			dispatch(toggleFollowInProgress(false, userId))
}

export const unfollowThunkCreator = (userId:number) => async (dispatch:any) => {
	followThunkCreatorFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowed, unfollowedUser)
}

export const followThunkCreator = (userId:number) => async(dispatch:any) => {
	followThunkCreatorFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followed, followedUser)
}

export default usersReducer;


