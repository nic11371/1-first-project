import { AppStateType } from './../../redux/reduxStore';
import { createSelector } from "reselect"

export const getUsers = (state: AppStateType) => {
	return state.usersPage.users;
}

export const getPageSize = (state: AppStateType) => {
	return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
	return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
	return state.usersPage.currentPage
}

export const getFetching = (state: AppStateType) => {
	return state.usersPage.isFetching
}

export const getFollowInProgress = (state: AppStateType) => {
	return state.usersPage.followInProgress
}

// export const getUsers = createSelector(getUsersSelector, (users) => {
// 	return users.filter(f => true);
// });

export const getPortionSize = (state: AppStateType) => {
	return state.usersPage.portionSize
}