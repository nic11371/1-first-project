import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utilites/helper/followHelpers";

const FOLLOWED = "network/users/FOLLOWED";
const UNFOLLOWED = "network/users/UNFOLLOWED";
const SET_USERS = "network/users/SET_USERS";
const SET_CURRENT_PAGE = "network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "network/users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOW_IN_PROGRESS = "network/users/TOGGLE_FOLLOW_IN_PROGRESS";

const initialState = {
	users: [],
	pageSize: 15,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followInProgress: [],
	portionSize: 5
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOWED:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
			}
		case UNFOLLOWED:
			return {
				...state, users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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

export const followed = (userId) => ({ type: FOLLOWED, userId })
export const unfollowed = (userId) => ({ type: UNFOLLOWED, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, count: isFetching })
export const toggleFollowInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId })
export default usersReducer;

export const getUsersThunkCreator = (currentPage, pageSize, portionSize) => 
async (dispatch) => {
	dispatch(toggleIsFetching(true))
	const response = await usersAPI.getUsers(currentPage, pageSize, portionSize)
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(response.items));
			dispatch(setTotalUsersCount(response.totalCount));
}

export const followThunkCreatorFlow = async (dispatch, userId, 
	apiMethod, actionCreatorFlow) => {
	dispatch(toggleFollowInProgress(true, userId))
	const response = await apiMethod(userId)
			if (response.resultCode === 0) {
				dispatch(actionCreatorFlow(userId))
			}
			dispatch(toggleFollowInProgress(false, userId))
}

export const unfollowThunkCreator = (userId) => async (dispatch) => {
	followThunkCreatorFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowed)
}

export const followThunkCreator = (userId) => async(dispatch) => {
	followThunkCreatorFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followed)
}

