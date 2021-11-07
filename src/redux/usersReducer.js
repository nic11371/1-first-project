import { usersAPI } from "../api/api";

const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE_FOLLOW_IN_PROGRESS";

const initialState = {
	users: [],
	pageSize: 15,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followInProgress: []
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOWED:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOWED:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
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


export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
	dispatch(toggleIsFetching(true))
	usersAPI.getUsers(currentPage, pageSize)
		.then(response => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(response.items));
			dispatch(setTotalUsersCount(response.totalCount));
		})
}

export const unfollowThunkCreator = (userId) => (dispatch) => {

	dispatch(toggleFollowInProgress(true, userId))
	usersAPI.unfollow(userId)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(unfollowed(userId))
			}
			dispatch(toggleFollowInProgress(false, userId))
		})
}

export const followThunkCreator = (userId) => (dispatch) => {

	dispatch(toggleFollowInProgress(true, userId))
	usersAPI.follow(userId)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(followed(userId))
			}
			dispatch(toggleFollowInProgress(false, userId))
		})
}

