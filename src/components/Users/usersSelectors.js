import { createSelector } from "reselect"

const getUsersSelector = (state) => {
	return state.usersPage.users;
}

export const getPageSize = (state) => {
	return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage
}

export const getFetching = (state) => {
	return state.usersPage.isFetching
}

export const getFollowInProgress = (state) => {
	return state.usersPage.followInProgress
}

export const getUsers = createSelector(getUsersSelector, (users) => {
	return users.filter(f => true);
});

export const getPortionSize = (state) => {
	return state.usersPage.portionSize
}